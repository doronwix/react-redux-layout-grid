import React from 'react';
import Header from './Header';

import { makeStyles } from '@material-ui/core/styles';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
    root: {
        
    },
    paper: {
        
    },
  });

export default function Root(){
    const classes = useStyles();
    return(
        <React.Fragment>
        <Header></Header>
        <Grid container sm={12}>
            <Grid item sm={6}>
                <Paper className={`${classes.root} ${classes.paper}`}>
                Left
                </Paper>
                
            </Grid>
            <Grid item sm={6}>
            <Paper className={`${classes.root} ${classes.paper}`}>
                Right
                </Paper>
            </Grid>
        </Grid>
        </React.Fragment>
    );
}