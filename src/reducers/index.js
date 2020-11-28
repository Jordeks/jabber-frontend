import { messagesReducer } from './messages'
import { currentUserReducer } from './currentUser'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  messages: messagesReducer,
  currentUser: currentUserReducer

})

export default rootReducer