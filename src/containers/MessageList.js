import React from 'react'
import Message from '../components/Message'
import MessageForm from '../components/MessageForm'

import { connect } from 'react-redux'
import { addMessage } from '../actions/messages'

class MessageList extends React.Component {
    // console.log(props)

    state = {
        username: '',
        content: ''
    }

    onChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    onSubmit = e => {
        e.preventDefault()
        console.log("in onSubmit")
        this.props.addMessage(this.state)
        // console.log(this.state)
        this.setState({
            username: '',
            content: ''
        })
    }

    openNewMessageForm = () => {
        this.setState({
            username: '',
            content: '',
            id: ''
        })
    }

    populateForm = (message) => this.setState({
        username: message.username,
        content: message.content
    })

    render() {
        return (
            <>
                <div className='messanger__header'>
                    <h2 className='heading-secondary'> Latest Jabber</h2> 
                </div>
                    <div className='message-list'> 
                        <div className='message-list__box'>
                            <ul className='message-list__ul'>
                                {this.props.messages.map(message => <Message  populateForm={this.populateForm} content={message.content} username={message.username} id={message.id} key={message.id}/>)}
                            </ul>
                        </div>
                    </div>
                    <a href="#popup" onClick={this.openNewMessageForm}>New Message</a>
                <MessageForm onChange={this.onChange} onSubmit={this.onSubmit} {...this.state}/>
            </>
        )
    }
}

export default connect(null, { addMessage })(MessageList)
