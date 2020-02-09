
import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import {addComponent} from '../actions/creators'


const ConfigurationBoard = ({classes}) =>{
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    
    const onDragOver = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
       }
    const onDrop = (ev) => {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData("text/html");
        //ev.target.appendChild(document.getElementById(data));
        dispatch(addComponent(data))
    }
    
    return(
        <React.Fragment>
            {state &&
                state.component.map(cmp =>
                <Paper className = {classes}> 
                <h1>{cmp.id}</h1>
                </Paper>
                )
            }
            <Paper id="target"  onDrop={(e) => onDrop(e)} onDragOver={(e) => onDragOver(e)}>
                    drag here
            </Paper>
            </React.Fragment>
        
    )
    
}

export default  ConfigurationBoard