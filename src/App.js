//import react
import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
//import components
import './App.css';
import Workspace from './components/Workspace';
import Header from './components/Header';
import Collections from './components/Collections';

const useStyles = makeStyles({
  root: {
      margin: '33px 60px',
  },
})

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Header />
      <div className={classes.root}>
        <Workspace />
        <Collections />
      </div>
    </div>
  );
}

export default App;
