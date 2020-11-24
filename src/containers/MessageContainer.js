import React, { Component } from 'react'
import MessageList from './MessageList'
import MessageForm from '../components/MessageForm'
import { getMessages } from '../actions/messages'
import { connect } from 'react-redux'

class MessageContainer extends Component {

    componentDidMount(){
        this.props.getMessages()
    }

    onClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className='messanger'>
                <button class='btn' onClick={this.onClick}>Home</button>
                <MessageList messages={this.props.messages} />
                <MessageForm />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        messages: state.messages
    }
}

export default connect(mapStateToProps, { getMessages })(MessageContainer)