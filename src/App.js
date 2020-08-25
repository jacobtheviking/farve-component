//import react
import React, { useState, useEffect, Component } from 'react';
import './App.css';
//import material-ui
import { Container, Button } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
//import components
import Workspace from './components/Workspace';
import Header from './components/Header';
//import hooks
import { DisplaySize, DisplayWidth, DisplayHeight } from '/home/jacob/farvecomponent/src/components/hooks/useWindowDimensions'; //display size
//import assets



function App() {
  return (
    <div className="App">

      <Header />
      {/* <Workspace />
      <DisplaySize />
      <View />
      <useWindowDimensions />
      <Example />
      <Button variant='contained' color='primary'>Inbar</Button> */}

    </div>
  );
}

export default App;
