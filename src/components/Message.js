import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteMessage } from '../actions/messages'

class Message extends Component {

    onClick = () => {
        this.props.deleteMessage(this.props.id)
    }
 
    render() {
        return (
            <li>
                <span><strong>{this.props.username}</strong>: {this.props.content}</span>
                <span><button className='btn btn--delete' onClick={this.onClick}>&times;</button></span>
            </li>
        )
    }
}

export default connect(null, { deleteMessage })(Message)