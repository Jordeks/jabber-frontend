import { SET_CURRENT_USER } from "../actionTypes"

export function currentUserReducer(state = null, action) {
  switch(action.type) {
    case SET_CURRENT_USER:
      console.log(action.user)
      return action.user
    default:
      return state
  }
}