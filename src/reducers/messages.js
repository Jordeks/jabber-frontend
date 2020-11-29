import {
  GET_MESSAGES,
  ADD_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE,
  CLEAR_MESSAGES
} from '../actionTypes'

const initialState = []

export function messagesReducer(state = initialState, action) {
  switch(action.type){
    case GET_MESSAGES:
      return action.messages
    case ADD_MESSAGE:
      return [...state, action.message]
    case EDIT_MESSAGE:
      return state.map(message => message.id === action.message.id ? action.message : message)
    case DELETE_MESSAGE: 
      return state.filter(message => message.id !== action.messageId)
    case CLEAR_MESSAGES:
      return initialState
      default:
      return state

  }
}