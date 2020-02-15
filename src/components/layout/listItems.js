import React from 'react';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';


// Generate Order Data
function createData(id, name, text) {
  return { id, name, text };
}

const list_of_components = [
  createData(0, 'Component_1', 'one'),
  createData(1, 'Component_2', 'two'),
  createData(2, 'Component_3', 'three'),
  createData(3, 'Component_4', 'four'),
  createData(4, 'Component_5', 'five')
];

const useStyles = makeStyles(theme =>({
  componentContext: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingLeft: theme.spacing(4)
  },
}));


export default function MainListItems() {
const classes = useStyles();
const onDragStart = (ev) =>{
  ev.dataTransfer.dropEffect = "copy";
  // Add the target element's id to the data transfer object
  ev.dataTransfer.setData('text/plain', '');
  
}
return(
  <div>
    <ListSubheader inset>Componenets</ListSubheader>
    {list_of_components.map(c => (
    <ListItem >
      <Paper key={c.id} primary={c.name} square="false" className={classes.componentContext} draggable onDragStart={(e) => onDragStart(e)}> {c.name}</Paper>
      
    </ListItem>
    ))}
  </div>
  );
}

