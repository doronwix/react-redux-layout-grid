import React from 'react';
import Header from './Header';
import ComponentBlocks from './ComponentBlocks';
import ConfigurationBoard from './ConfigurationBoard'

import { makeStyles } from '@material-ui/core/styles';

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        
    },
    paper: {
        padding: 20, marginTop:10, marginBottom:30
    },
  });

export default function Root(){
    const classes = useStyles();
    console.log(classes.paper)
    return(
        <React.Fragment>
        <Header></Header>
        <Grid container item={true} sm={12}>
            <Grid item={true} sm={2}>
                <ComponentBlocks className={classes.root} classes={classes.paper}/>                           
            </Grid>
            <Grid item={true} sm={10}>
                <ConfigurationBoard className={classes.root} classes={classes.paper}/>                           
            </Grid>
        </Grid>
        </React.Fragment>
    );
}