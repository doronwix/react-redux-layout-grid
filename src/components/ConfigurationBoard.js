import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";


const ConfigurationBoard = ({classes}) =>{
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    
    return(
        
            state &&
                state.component.map(cmp =>
                <Paper className = {classes}> 
                <h1>{cmp.id}</h1>
                </Paper>
                )
            
       
        
    )
    
}

export default  ConfigurationBoard