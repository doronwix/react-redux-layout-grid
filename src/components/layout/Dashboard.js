import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {
  Link as LinkRoute
} from "react-router-dom";

import {addComponent, removeComponent, saveLayout} from '../../actions/creators'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SaveIcon from '@material-ui/icons/Save';
import Container from '@material-ui/core/Container';

import Paper from '@material-ui/core/Paper';

import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';


import MainListItems from './listItems';
import Copyright from './Copyright';
import { Responsive, WidthProvider } from "react-grid-layout";
import '../../../node_modules/react-grid-layout/css/styles.css';

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
    
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    
  },
  paper: {
    padding: theme.spacing(2),
    

  },
  grid:{
    height: '40em',
    borderStyle: "solid",
    borderWidth: "1px",
  }
}));

const ResponsiveReactGridLayout = WidthProvider(Responsive);

export default function Dashboard() {
  let layout_for_state = [];

  const classes = useStyles();

  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const grid_config = {
    layouts: state.layout,
    className: classes.gridLayout,
    onDrop: (e) => onGridDrop(e),
    onLayoutChange: (layout, layouts) =>
    onLayoutChange(layout, layouts),
    isDroppable:true,
    useCSSTransforms:true
  }

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  

  const onGridDrop = (elm) => {
    dispatch(addComponent(elm));
  
}
const onSaveLayout =() =>{
  if(layout_for_state && layout_for_state.length>0){
    dispatch(saveLayout(layout_for_state))
    
  }
  alert('Layout Saved');
  
}

const onLayoutChange = (layout, layouts) => {
    layout_for_state = layout;

}


  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard
          </Typography>
          <LinkRoute to="/Layouts">
            <Typography component="h1" variant="h6" noWrap className={classes.link}>
                  Layouts
            </Typography>
          </LinkRoute>

          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<SaveIcon />}
            onClick={onSaveLayout}
          >
            Save
          </Button>
          
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        
        <List><MainListItems></MainListItems></List>
        <Divider />
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
       <Box className={classes.grid}>
          <ResponsiveReactGridLayout  id="target" {...grid_config} >
         
 
          {state &&
              state.component.map(
              cmp => 
                <Paper className={classes.paper} key={cmp.i} data-grid={{ x: cmp.x, y: cmp.y, w: 2, h: 1 }}>
                 <Bricks size={4} />
              </Paper>
             )
            }
  

          </ResponsiveReactGridLayout>
          </Box>

          <Box pt={4} className="Copyright">
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
