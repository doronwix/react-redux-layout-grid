	// import the dependency
import remove from 'lodash'

import {ADD_COMPONENT,REMOVE_COMPONENT, SAVE_LAYOUT} from '../actions/types'

function reducers(state = {component: [], layouts:[]}, action){
  switch (action.type) {
    case ADD_COMPONENT:
      return {
        ...state,
        component: [...state.component, {
          i: "d" + Math.floor(Math.random() * Math.floor(100000)) + 1,
          x: action.payload.x,
          y: action.payload.y,
          w: action.payload.w,
          h: action.payload.h,
          static: Math.random() < 0.05
        }]
      }

    case REMOVE_COMPONENT:
      const deletedNewArray = remove(state.component, obj => {
        return obj.id !== action.payload
      })
      return deletedNewArray

      case SAVE_LAYOUT:
        return {
          ...state,
          layouts: [...state.layouts, {...action.payload}]
        }    

    default:
      return state
  }
}
 
export default reducers;