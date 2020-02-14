import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Material UI components
import Container from '@material-ui/core/Container';

import CssBaseline from '@material-ui/core/CssBaseline';


import Root from './components/Root';

import Dashboard from './components/layout/Dashboard';
import AddRemoveLayout from './components/testgrid';

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
    <Container maxWidth="lg">
        <CssBaseline />

     
       <Dashboard></Dashboard>
  

    </Container>
    );
}

export default App;