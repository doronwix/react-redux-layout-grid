import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  Link as LinkRoute
} from "react-router-dom";

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import _ from 'lodash'

import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';

import RGL, { WidthProvider } from "react-grid-layout";


import '../../../node_modules/react-grid-layout/css/styles.css';

import Copyright from './Copyright';
import Bricks from './Bricks';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
    paddingRight: theme.spacing(4),
  },
  link: {
    flexGrow: 1,
    color:'white'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  paper: {
    

  },
  grid:{
    flex: '0 32%',
    height: '20em',
    marginBottom: '2%', /* (100-32*3)/2 */

    borderStyle: "solid",
    borderWidth: "1px",
  }
}));

const ReactGridLayout = WidthProvider(RGL);

export default function Layouts() {
    const classes = useStyles();

    const state = useSelector(state => state);
    
    const flexGrid = ()=>{
      let children =[];
      for(let i=0;i<6-state.layouts.length;i++){
        children.push(<div className={classes.grid}></div>);
      }
      
      return children;
    }

  

    return (
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="absolute" className={clsx(classes.appBar)}>
            <Toolbar className={classes.toolbar}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className={clsx(classes.menuButton)}
              >
                <MenuIcon />
              </IconButton>
              <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                Layouts
              </Typography>
              <LinkRoute to="/Dashboard">
                <Typography component="h1" variant="h6" noWrap className={classes.link}>
                Dashboard
                </Typography>
              </LinkRoute>
              
            </Toolbar>
          </AppBar>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
            {state &&
              state.layouts.map(
              lt => 
              <div className={classes.grid}> 
                   
              <ReactGridLayout id="target" isDraggable= {false}  layouts={lt} verticalCompact={true} rowHeight={75} cols={12}>        
              {_.map(lt, 
                cmp =>                
                <Paper  key={cmp.i} data-grid={{ x: cmp.x, y: cmp.y, w: cmp.w, h: cmp.h, static:true}}>
                  Comp
                </Paper>
             )}

              </ReactGridLayout>
              
              </div>)
              
              }
              {flexGrid()}
              

            </Container>
          </main>
        </div>
      );
}