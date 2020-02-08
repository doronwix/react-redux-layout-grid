import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import {addComponent,removeComponent} from '../actions/creators'



const ComponentBlocks = ({classes}) =>{
    const counter = useSelector(state => state);
    const dispatch = useDispatch();

    const addcomponent = text => dispatch(addComponent(text))
    const removecomponent = id => dispatch(removeComponent(id))
    return(
        <Paper    onClick={() =>
            addcomponent("added")
          } className = {classes}>
                Left
        </Paper>
        
    )
}

export default  ComponentBlocks