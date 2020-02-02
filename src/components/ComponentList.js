import React, {useState, useCallback} from 'react';
import uuid from 'uuid';
import {range, inRange} from 'lodash';


//Material UI components
import {makeStyles} from "@material-ui/core/styles/index";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import Draggable from './Draggble';




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

    },
    iconButton: {
        padding: 10,
    },
    paper: {
        maxWidth:'100rem'
    }
});

const MAX = 5;
const HEIGHT = 80;

function PaperComponent(props) {
    return (
      <Draggable             
     
      id={props.id}
      onDrag={props.onDrag}
      onDragEnd={props.onDragEnd} >

        <Paper key={'paper' + props.id} {...props} > {props.children} </Paper>
      </Draggable>
    );
  }

export default function ComponentList() {
    const classes = useStyles();
    const items = range(MAX);
    const [state, setState] = useState({
        order: items,
        dragOrder: items, // items order while dragging
        draggedIndex: null
    });
    const handleDrag = useCallback(({translation, id}) => {
        const delta = Math.round(translation.y / HEIGHT);
        const index = state.order.indexOf(id);
        const dragOrder = state.order.filter(index => index !== id);
            
        if (!inRange(index + delta, 0, items.length)) {
          return;
        }
            
        dragOrder.splice(index + delta, 0, id);
            
        setState(state => ({
          ...state,
          draggedIndex: id,
          dragOrder
        }));
      }, [state.order, items.length]);
        
      const handleDragEnd = useCallback(() => {
        setState(state => ({
          ...state,
          order: state.dragOrder,
          draggedIndex: null
        }));
      }, []);

    return(
        <React.Fragment>
            <Grid item xs={4} sm={6} md={4} lg={12}>
             {items.map(index => {
                       const isDragging = state.draggedIndex === index;
                       const top = state.dragOrder.indexOf(index) * (HEIGHT + 10);
                       const draggedTop = state.order.indexOf(index) * (HEIGHT + 10);
                       return(
                        <PaperComponent className={classes.root}  id={'PaperComponent' + index} onDrag={handleDrag} onDragEnd={handleDragEnd} className={classes.paper}>
                            <h2>Component {index} </h2>                        
                        </PaperComponent> 
                       )
   
              })}     
            </Grid>
        </React.Fragment>
    )
}