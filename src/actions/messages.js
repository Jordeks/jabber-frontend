import { 
  GET_MESSAGES,
  ADD_MESSAGE
} from '../actionTypes' 


export function getMessages() {
  return (dispatch) => {
    fetch('http://localhost:3000/messages')
    .then(resp => resp.json())
    .then(messages => dispatch({
      type: GET_MESSAGES,
      messages
    }))
  }
}

export function addMessage(messageObj) {
  return {
    type: ADD_MESSAGE,
    message: messageObj
  }
}