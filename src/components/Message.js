import React, { Component } from 'react'
import { getMessages } from '../actions/messages'
import { connect } from 'react-redux'

class Message extends Component {

    componentDidMount(){
        this.props.getMessages()
    }
    render() {
        return (
            <li>
                <strong>{this.props.username}</strong>: {this.props.content}
            </li>
        )
    }
}

export default connect(null, { getMessages })(Message)