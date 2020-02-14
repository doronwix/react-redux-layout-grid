import React from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import {addComponent} from '../actions/creators'



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
            <Container maxWidth="sm">
            <Typography variant="h4" component="h2">Components</Typography >  
            <Divider variant="middle" />
            <Paper className = {classes} draggable onDragStart={(e) => onDragStart(e)}>
                <h1>draggble</h1>
            </Paper>  
        </Container>
        </React.Fragment>      
    )
}

export default  ComponentBlocks