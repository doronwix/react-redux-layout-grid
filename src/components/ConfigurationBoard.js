
import React, { useRef } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import {addComponent} from '../actions/creators'
import GridLayout from 'react-grid-layout';


const ConfigurationBoard = ({classes}) =>{
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const layout = [
        {i: '0', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: '1', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: '2', x: 4, y: 0, w: 1, h: 2}
      ];

    
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
            <Paper id="target"  onDrop={(e) => onDrop(e)} onDragOver={(e) => onDragOver(e)}>
                    drag here
            </Paper>
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
            {state &&
                state.component.map(cmp =>
                <Paper key={cmp.id} className = {classes}> 
                <h1>{cmp.id}</h1>
                </Paper>
                )
            }
            </GridLayout>
            </React.Fragment>
        
    )
    
}

export default  ConfigurationBoard