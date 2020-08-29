import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getColors, addColor } from '../utils/dataActions';
import ColorCard from './ColorCard';
import { randomColor } from '../utils/utils';
import Haikunator from 'haikunator';

const haikunator = new Haikunator({
  defaults: {
    delimiter: ' ',
    tokenLength: 0,
  },
});

const useStyles = makeStyles({
  box: {
    height: '275px',
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: '30px 30px 120px 30px',
    opacity: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
});

function Colors(props) {
  const classes = useStyles();
  const { collectionId } = props;
  const [colors, setColors] = useState(getColors(collectionId));

  useEffect(() => {
    setColors(getColors(collectionId));
  }, [collectionId]);

  const handleClick = () => {
    addColor(collectionId, haikunator.haikunate(), randomColor());
    setColors(getColors(collectionId));
  };

  const renderColors = () =>
    colors.map(color => (
      <ColorCard
        name={color.name}
        hexValue={color.hexValue}
        key={`${color.name}-${color.hexValue}`}
      />
    ));

  return (
    <div className={classes.box}>
      <div className={classes.container}>
        <Button onClick={handleClick}>new color</Button>
        {renderColors()}
      </div>
    </div>
  );
}

Colors.propTypes = {
  collectionId: propTypes.string,
};

Colors.defaultProps = {
  collectionId: '',
};

export default Colors;
