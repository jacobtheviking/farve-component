import React from 'react';
import './App.css';
import {Button} from '@material-ui/core';
import Header from './components/Header';
import Workspace from './components/Workspace';

function App() {
  return (
    <div className="App">
      <Header />
      <Workspace />
      <Button variant='contained' color='primary'>Inbar</Button>
    </div>
  );
}

export default App;
