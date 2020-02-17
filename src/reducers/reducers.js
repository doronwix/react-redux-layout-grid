	// import the dependency
import _ from 'lodash'

import {ADD_COMPONENT,REMOVE_COMPONENT, CLEAR_COMPONENTS, SAVE_LAYOUT} from '../actions/types'

function reducers(state = {component: [], layouts:[], count:0}, action){
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
        return {...state,
        component:  state.component.filter( item=> item.i !== action.payload  )
        }

    case CLEAR_COMPONENTS:
      return{
        ...state,
        component:[]
      }
      

      case SAVE_LAYOUT:
        return {
          ...state,
          layouts: [...state.layouts, {...action.payload}],
          count: state.count + 1
        }    

    default:
      return state
  }
}
 
export default reducers;