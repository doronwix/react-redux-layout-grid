import React from 'react';	
 
function layoutReducer(state = {vehicle: ''}, action){
switch (action.type) {
    case "Add":
    return {
      component: "Added"
    };
    case "Remove":
    return {
        component: "Removed"
    };
    default:
      return "Nothing Happened";
  }
}
 
export default layoutReducer;