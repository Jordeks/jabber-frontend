import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteMessage } from '../actions/messages'
import sprite from '../img/sprite.svg'

class Message extends Component {

    onClick = () => {
        this.props.deleteMessage(this.props.id)
    }
 
    render() {
        return (
            <li className='message-list__li'>
                <span>{this.props.username}:</span> <span>{this.props.content}</span>
                <span><a href="#popup">Edit</a></span>
                <span><button className='btn btn--delete' onClick={this.onClick}>
                    <svg className="icon--trash">
                            <use href={sprite + '#icon-trash'} />
                    </svg>
                </button></span>
            </li>
        )
    }
}

export default connect(null, { deleteMessage })(Message)