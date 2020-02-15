// Action Creators
import {ADD_COMPONENT,CLEAR_COMPONENTS, SAVE_LAYOUT} from './types'


const addComponent = payload => ({ type: ADD_COMPONENT, payload });

const clearComponents = payload => ({ type: CLEAR_COMPONENTS, payload });

const saveLayout = payload => ({ type: SAVE_LAYOUT, payload });



export {addComponent, clearComponents, saveLayout}