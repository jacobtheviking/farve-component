import React from 'react';
import {
    AppBar,
    Button,
    IconButton,
    Toolbar,
    Typography ,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme) => ({
    flexGrow: {
      flexGrow: 1,
    },
    title: {

    }
  }));

function Header() {
    const classes = useStyles();
    return (
        <AppBar position="static">
        <Toolbar>
            <div className={classes.flexGrow}/>
            <Typography variant="h6" className={classes.title}>
                farveComponent
            </Typography>
        </Toolbar>
      </AppBar>
    )
}
export default Header;