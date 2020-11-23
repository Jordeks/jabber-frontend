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
  return (dispatch) => {
    fetch('http://localhost3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(messageObj),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
  // return {
  //   type: ADD_MESSAGE,
  //   message: messageObj
  // }
}