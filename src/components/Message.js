import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        return (
            <li>
                <strong>{this.props.username}</strong>: {this.props.content}
            </li>
        )
    }
}
