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
            <>
            <li className='message-list__li'>
                <div className='message'>
                    <span className='message__username'>{this.props.username}</span> 
                    <p className='message__content'>{this.props.content}
                    <span>
                        <a href="#popup" onClick={() => this.props.populateForm(this.props)}>
                            <svg className="icon--edit">
                                <use href={sprite + '#icon-edit'} />
                            </svg>
                        </a>
                    </span>
                    <span>
                        <a href="#"onClick={this.onClick}>
                            <svg className="icon--trash">
                                    <use href={sprite + '#icon-trash'} />
                            </svg>
                        </a>
                    </span>
                    </p>
                </div>
            </li>
            </>

        )
    }
}

export default connect(null, { deleteMessage })(Message)