//import react
import React from 'react';
//import material-ui
import { AppBar, Toolbar, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//import assets
import logo from '../assets/images/farveComponentIcon.svg';

console.log(logo);


const useStyles = makeStyles({
  root: {
    background: 'white', //the shape color
    border: 0,
    borderRadius: 0,
    boxShadow: '0 1px 1px 1px rgba(0, 0, 0, .3)',
    height: 110,
    color: 'black',
  },

  flexGrow: {
    flexGrow: 1,

  },

  farve: {
    fontFamily: 'NexaBold',
    fontSize: 24,

  },

  component: {
    fontFamily: 'NexaBold',
    fontSize: 65,
    marginRight: 0,

  },

  icon: {
    marginRight: 32,

  }
});


function Header() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root} >
      <Toolbar>
        <div className={classes.flexGrow} />
        <Typography variant="h6"><span className={classes.farve}>FARVE </span><span className={classes.component}>component</span></Typography>
        <img className={classes.icon} src={logo} alt="logo" />
      </Toolbar>
    </AppBar>
  )
}
export default Header;