import React, {Component} from 'react'

export default class MessageForm extends Component {

    state = {
        username: '',
        message: ''
    }

    handleChange = e => {
        const { name, value } = e.target
        this.setState({[name]: value})
    }

    handleSubmit = e => {
        e.preventDault()
        this.props.addMessage()
        this.setState({
            username: '',
            text: ''
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
                    <input className='form__input' type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
                </label><br/>
            </div>
            <button className='btn btn--small' type="submit" value="Submit"> Send Message</button>
        </form>
    </div>
    )
  }

}