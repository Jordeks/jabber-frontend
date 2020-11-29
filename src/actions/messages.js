import { 
  GET_MESSAGES,
  ADD_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE
} from '../actionTypes' 

import { getCurrentUser } from './currentUser'

const URL = 'http://localhost:3000/api/v1/messages'

export function getMessages() {
  return (dispatch) => {
    fetch(URL)
    .then(resp => resp.json())
    .then(messages => dispatch({
      type: GET_MESSAGES,
      messages
    }))
  }
}

export function addMessage(messageObj) {
  return (dispatch) => {
    fetch(URL, {
      credentials: "include",
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageObj),
    })
    .then(response => response.json())
    .then(message => {
      if (message.error) {
        alert(message.error)
      } else {
        dispatch({
          type: ADD_MESSAGE, 
          message
        })
        dispatch(getCurrentUser())
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

export function editMessage(messageObj) {
  return (dispatch) => {
    fetch(`${URL}/${messageObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageObj),
    })
    .then(response => response.json())
    .then(message => {
      if (message.error) {
        alert(message.error)
      } else {
        dispatch({
          type: EDIT_MESSAGE, 
          message
        })
        dispatch(getCurrentUser())
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

export function deleteMessage(messageId) {
  return (dispatch) => {
    dispatch(getCurrentUser())
    fetch(`${URL}/${messageId}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => dispatch({
      type: DELETE_MESSAGE,
      messageId
    })
    )
  }
}