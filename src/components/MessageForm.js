import React, {Component} from 'react'

import { connect } from 'react-redux'
import { addMessage } from '../actions/messages'

class MessageForm extends Component {

    state = {
        username: '',
        content: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.addMessage(this.state)
        // console.log(this.state)
        this.setState({
            username: '',
            content: ''
        })
    }

  render(){
    return(
    <div className='form-container'>
        <form className='form' onSubmit={this.handleSubmit}>
            <div className='form__group'>
                <label className='form__label'>
                    Username:
                    <input className='form__input' type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                </label><br/>
            </div>
            <div className='form__group'>
                <label className='form__label'>
                    Message:
                    <input className='form__input' type="text" name="content" value={this.state.content} onChange={this.handleChange}/>
                </label><br/>
            </div>
            <button className='btn btn--small' type="submit" value="Submit"> Send Message</button>
        </form>
    </div>
    )
  }

}

export default connect(null, { addMessage })(MessageForm)