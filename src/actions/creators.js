// Action Creators
import {ADD_COMPONENT,REMOVE_COMPONENT, SAVE_LAYOUT} from './types'


const addComponent = payload => ({ type: ADD_COMPONENT, payload });

const removeComponent = payload => ({ type: REMOVE_COMPONENT, payload });

const saveLayout = payload => ({ type: SAVE_LAYOUT, payload });



export {addComponent, removeComponent, saveLayout}