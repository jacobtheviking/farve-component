import React, { useState } from 'react';
import { Button, Typography, Tab, Tabs } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { addCollection, getCollections } from '../utils/dataActions';
import Colors from './Colors';

//import assets
import Icon from '../assets/images/addCollectionIcon.svg';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '34px',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    borderRadius: '360px',
    fontSize: '24px',
    height: '45px',
    textTransform: 'none',
  },
  tab: {
    textTransform: 'lowercase',
  },
  selectedTab: {
    backgroundColor: theme.palette.primary.main,
    borderRadius: '360px',
    boxShadow: '0px 3px 6px #0000004D',
    color: '#fff',
  },
  indicator: {
    backgroundColor: '#fff',
  },
  title: {
    marginRight: '30px',
  },
}));

function Collections() {
  const classes = useStyles();
  const [collections, setCollections] = useState(getCollections());

  const defaultCollection = collections[0] ? collections[0].id : '';
  const [currentCollection, setCurrentCollection] = useState(defaultCollection);

  const handleAddClick = () => {
    addCollection('New Collection');
    setCollections(getCollections());
  };
  const handleCollectionChange = (_, newCollection) =>
    setCurrentCollection(newCollection);

  const renderTabs = () =>
    collections.map(collection => (
      <Tab
        className={classes.tab}
        classes={{
          selected: classes.selectedTab,
        }}
        label={collection.name}
        value={collection.id}
        key={collection.id}
      />
    ));

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Typography variant='h3' align='left' className={classes.title}>
          Collections
        </Typography>
        <Tabs
          value={currentCollection}
          onChange={handleCollectionChange}
          className={classes.container}
          classes={{
            indicator: classes.indicator,
          }}
        >
          {renderTabs()}
        </Tabs>
        <Button
          className={classes.button}
          variant='contained'
          color='primary'
          size='large'
          endIcon={<img src={Icon} alt='add collection' />}
          onClick={handleAddClick}
        >
          new
        </Button>
      </div>
      <Colors collectionId={currentCollection} />
    </div>
  );
}

export default Collections;
