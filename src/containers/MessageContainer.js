import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from '../components/MessageForm'

export default class MessageContainer extends Component {

    state = {
        messages: [
           {
            id: 1,
            username: "jordles113", 
            content: 'WE CHATTIN'
           }, 

           {
            id: 2,
            username: "jordy", 
            content: 'Look at us chat'
           },

           {
            id: 3,
            username: "JoRo", 
            content: 'yes, we fictional folks are amazing chatters'
           } 
        ]
    }
    render() {
        return (
            <div className='messanger'>
                <MessageList messages={this.state.messages} />
                <MessageForm />
            </div>
        )
    }
}
