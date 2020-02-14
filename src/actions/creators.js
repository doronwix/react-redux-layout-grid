// Action Creators
import {ADD_COMPONENT, SAVE_LAYOUT} from './types'


const addComponent = payload => ({ type: ADD_COMPONENT, payload });

const saveLayout = payload => ({ type: SAVE_LAYOUT, payload });



export {addComponent, saveLayout}