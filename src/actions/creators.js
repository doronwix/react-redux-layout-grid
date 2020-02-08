// Action Creators
import {ADD_COMPONENT,REMOVE_COMPONENT} from './types'

let CID = 0
let text="";

export function addComponent() {
  return {
    type: ADD_COMPONENT,
    id: CID++,
    text: text
  }
}

export function removeComponent(id) {
  return {
    type: REMOVE_COMPONENT,
    payload: id
  }
}