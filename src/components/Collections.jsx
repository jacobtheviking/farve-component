import React, { useState } from 'react'
import classnames from 'classnames';
import {Button, Typography, Tab, Tabs } from '@material-ui/core';
import PlusIcon from '@material-ui/icons/AddCircleOutline';
import { makeStyles } from '@material-ui/core/styles'
import {addCollection, getCollections} from '../utils/localStorage'

const useStyles = makeStyles(theme=>({
    root:{
        marginTop: '34px'
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%'
    },
    button: {
        borderRadius: '360px',
        fontSize: '1.125rem',
        height: '45px',
        textTransform: 'none',
    },
    tab: {
        textTransform: 'lowercase'
    },
    selectedTab: {
        backgroundColor: theme.palette.primary.main,
        borderRadius: '360px',
        boxShadow: '0px 3px 6px #0000004D',
        color: '#fff',
    },
    indicator:{
        backgroundColor: '#fff'
    },
    title: {
        marginRight: '30px'
    }
}));

function Collections(){
    const classes = useStyles();
    const [collections, setCollections] = useState(getCollections());
    const [currentCollection, setCurrentCollection] = useState('');

    const handleAddClick = () => {
        addCollection('New Collection');
        setCollections(getCollections());
    };
    const handleCollectionChange = (_, newCollection) => setCurrentCollection(newCollection);

    const renderTabs = () => collections.map(collection => (
        <Tab
            className={classes.tab}
            classes={{
                selected: classes.selectedTab
            }}
            label={collection.name}
            value={collection.id}
        />
    ));

    return (
        <div className={classnames(classes.root, classes.container)}>
            <Typography variant='h3' align='left' className={classes.title}>Collections</Typography>
            <Tabs
                value={currentCollection}
                onChange={handleCollectionChange}
                className={classes.container}
                classes={{
                    indicator: classes.indicator
                }}
            >
                {renderTabs()}
            </Tabs>
            <Button 
                className={classes.button}
                variant='contained'
                color='primary'
                size='large'
                // TODO: Use Jacob's plus icon instead
                endIcon={<PlusIcon />}
                onClick={handleAddClick}
            >
                new
            </Button>
        </div>
    )
}

export default Collections;