import { 
  GET_MESSAGES,
  ADD_MESSAGE,
  EDIT_MESSAGE,
  DELETE_MESSAGE
} from '../actionTypes' 

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
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageObj),
    })
    .then(response => response.json())
    .then(messageObj => dispatch({
      type: ADD_MESSAGE,
      message: messageObj
    }))
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
    .then(messageObj => dispatch({
      type: EDIT_MESSAGE,
      message: messageObj
    }))
    .catch((error) => {
      console.error('Error:', error);
    });
  }
}

export function deleteMessage(messageId) {
  return (dispatch) => {
    fetch(`${URL}/${messageId}`, {
      method: 'DELETE',
    })
    .then(resp => resp.json())
    .then(() => dispatch({
      type: DELETE_MESSAGE,
      messageId
    }))
  }
}