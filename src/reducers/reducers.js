	// import the dependency
import remove from 'lodash'

import {ADD_COMPONENT,REMOVE_COMPONENT, SAVE_LAYOUT} from '../actions/types'

function reducers(state = {component: [], layout:[]}, action){
  switch (action.type) {
    case ADD_COMPONENT:
      return {
        ...state,
        component: [...state.component, {
          id: action.id,
          text: action.text
        }]
      }

    case REMOVE_COMPONENT:
      const deletedNewArray = remove(state, obj => {
        return obj.id !== action.payload
      })
      return deletedNewArray

      case SAVE_LAYOUT:
        return {
          ...state,
          layout: [...state.layout, {
            id: action.id,
            html: action.html
          }]
        }    

    default:
      return state
  }
}
 
export default reducers;