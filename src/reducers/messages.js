import {
  GET_MESSAGES,
  ADD_MESSAGE,
  DELETE_MESSAGE
} from '../actionTypes'

const initialState = []

export function messagesReducer(state = initialState, action) {
  switch(action.type){
    case GET_MESSAGES:
      return action.messages
    case ADD_MESSAGE:
      return [...state, action.message]
    case DELETE_MESSAGE: 
      return state.messages.filter(message => message.id !== action.messageId)
    default:
      return state

  }
}