
import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";


const ConfigurationBoard = ({classes}) =>{
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const dropit =useRef(null)
;
    const onDragOver = (ev) => {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
       }
    const onDrop = (ev) => {
        ev.preventDefault();
        // Get the id of the target and add the moved element to the target's DOM
        const data = ev.dataTransfer.getData("text/html");
        //ev.target.appendChild(document.getElementById(data));
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
            <Paper id="target" ref={drophere} onDrop={(e) => onDrop(e)} onDragOver={(e) => onDragOver(e)}>
                    drag here
            </Paper>
            </React.Fragment>
        
    )
    
}

export default  ConfigurationBoard