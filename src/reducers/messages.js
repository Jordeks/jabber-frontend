import {
  GET_MESSAGES,
  ADD_MESSAGE
} from '../actionTypes'

const initialState = []

export function messagesReducer(state = initialState, action) {
  switch(action.type){
    case GET_MESSAGES:
      return action.messages
    default:
      return state
  }
}