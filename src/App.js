import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Material UI components
import Container from '@material-ui/core/Container';

import CssBaseline from '@material-ui/core/CssBaseline';




import HTML5Backend from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import Root from './components/Root';

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

      
       {/* <Toolbar>
            <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className={classes.toolbarTitle}
            >
               Layout Configuration
            </Typography>
        </Toolbar>

        
        <DndProvider backend={HTML5Backend}>  
        <Grid  key={2} container spacing={2}>
            <ComponentList/>
            <PageLayout></PageLayout>

        </Grid>
        </DndProvider> */}
       <Root></Root>

    </Container>
    );
}

export default App;