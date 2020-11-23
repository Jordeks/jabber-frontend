import { messagesReducer } from './messages'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  messages: messagesReducer
})

export default rootReducer