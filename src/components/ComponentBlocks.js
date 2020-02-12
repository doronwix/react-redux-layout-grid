import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import {addComponent,removeComponent} from '../actions/creators'



const ComponentBlocks = ({classes}) =>{
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    const addcomponent = text => dispatch(addComponent(text))
    

    const onDragStart = (ev) =>{
        ev.dataTransfer.dropEffect = "copy";
        // Add the target element's id to the data transfer object
        ev.dataTransfer.setData("text/html", ev.target.outerHTML);
        
    }
    return(
        <React.Fragment>
        <Paper    onClick={() =>
            addcomponent("added")
          } className = {classes}>
                <h1>component</h1>
        </Paper>
        <Paper className = {classes} draggable onDragStart={(e) => onDragStart(e)}>
            <h1>draggble</h1>
        </Paper>  
        </React.Fragment>      
    )
}

export default  ComponentBlocks