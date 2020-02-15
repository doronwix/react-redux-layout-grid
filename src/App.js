import React from 'react';

import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './components/layout/Dashboard';
import Layouts from './components/layout/Layouts';

import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";



function App() {


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
           <Dashboard></Dashboard>
          </Route>
        </Switch>
    </Container>
    </Router>
    );
}

export default App;