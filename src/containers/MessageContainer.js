import React, { Component } from 'react'
import MessageList from './MessageList'
// import MessageForm from '../components/MessageForm'
import { getMessages } from '../actions/messages'
import { connect } from 'react-redux'
import sprite from '../img/sprite.svg'

class MessageContainer extends Component {

    componentDidMount(){
        this.props.getMessages()
    }

    onClick = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <>
                { this.props.loggedIn ? <><p>Logged in as {this.props.currentUser.username}</p></> : null}
                <button className='btn btn--icon u-float-left' onClick={this.onClick}>
                    <svg className="icon--home">
                        <use href={sprite + '#icon-home'} />
                    </svg>
                </button>
                <div className='messanger'>
                    <MessageList messages={this.props.messages} />
                    {/* <MessageForm /> */}
                </div>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        messages: state.messages,
        currentUser: state.currentUser,
        loggedIn: !!state.currentUser
    }
}


export default connect(mapStateToProps, { getMessages })(MessageContainer)