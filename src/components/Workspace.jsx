//import react
import React from 'react';
//import material-ui/core
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
//import hooks

const useStyles = makeStyles({
  root: {},
  box: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: '180px 60px 60px 180px',
    right: '50%',
    height: '420px',
    width: '880px',
  },
});

function Workspace() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant='h3' align='left'>
        Workspace
      </Typography>
      <div>
        <div className={classes.box}></div>
      </div>
    </div>
  );
}

export default Workspace;
