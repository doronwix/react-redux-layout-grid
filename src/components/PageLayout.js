import React from 'react';
import {makeStyles} from "@material-ui/core/styles/index";

//Material UI components
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import LayoutConfiguration from './LayoutConfiguration'



//Material UI Icons



const useStyles = makeStyles({
    root: {
        margin: '0 0 20px 0',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },
    box: {
        marginLeft: '8px',
        display:'block',
        width: '50%'
    },
    iconButton: {
        padding: 10,
    }
});

export default function PageLayout() {
    const classes = useStyles();

    return(
        <React.Fragment>
            <Grid  item xs={15} md={20} lg={25}>
                <LayoutConfiguration></LayoutConfiguration>
            </Grid>

        </React.Fragment>
    )
}