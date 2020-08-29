import React from 'react';
import propTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { isHexString } from '../utils/utils';

const useStyles = makeStyles({
  card: {
    width: '200px',
    height: '255px',
    background: '#FFFFFF',
    boxShadow: '4px 6px 6px #0000004D',
    borderRadius: '30px',
    opacity: 1,
    marginRight: '40px',
  },
  colorBackground: {
    height: '200px',
    backgroundColor: '#FFF',
    boxShadow: '0px 6px 6px #0000004D',
    borderRadius: '30px 30px 0px 75px',
    opacity: 1,
  },
  title: {
    color: '#FFF',
    fontSize: '27px',
    fontWeight: 'bold',
    height: '200px',
    letterSpacing: '0px',
    padding: '14px 13px',
    textShadow: '0px 3px 12px #00000029',
    textTransform: 'capitalize',
  },
});

function ColorCard(props) {
  const classes = useStyles();
  const { name, hexValue } = props;

  return (
    <div className={classes.card}>
      <div
        className={classes.colorBackground}
        style={{ backgroundColor: isHexString(hexValue) && hexValue }}
      >
        <Typography className={classes.title} align='left'>
          {name}
        </Typography>
      </div>
    </div>
  );
}

ColorCard.propTypes = {
  name: propTypes.string,
  hexValue: propTypes.string,
  empty: propTypes.bool,
};

ColorCard.defaultProps = {
  empty: false,
};

export default ColorCard;
