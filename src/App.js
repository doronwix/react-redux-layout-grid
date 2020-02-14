import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


//Material UI components
import Container from '@material-ui/core/Container';

import CssBaseline from '@material-ui/core/CssBaseline';

import Dashboard from './components/layout/Dashboard';

import Layouts from './components/layout/Layouts';

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";


import './App.css';

//Styles
const useStyles = makeStyles({
  toolbarTitle: {
      flex: 1,
  },
});

function App() {

const classes = useStyles();

return (
    <Router>
    <Container maxWidth="lg">
        <CssBaseline />
        <Switch>
          <Route path="/Layouts">
          <Layouts></Layouts>
          </Route>
          <Route path="/Dashboard">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/">
           <Layouts></Layouts>
          </Route>
        </Switch>
   

    

    </Container>
    </Router>
    );
}

export default App;