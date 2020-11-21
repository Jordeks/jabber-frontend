import React, {Component} from 'react'

export default class MessageForm extends Component {
  render(){
    return(
    <div className='form-container'>
        <form className='form'>
            <div className='form__group'>
                <label className='form__label'>
                    Username:
                    <input className='form__input'type="content" name="username"/>
                </label><br/>
            </div>
            <div className='form__group'>
                <label className='form__label'>
                    Message:
                    <input className='form__input'type="content" name="message"/>
                </label><br/>
            </div>
            <button className='btn btn--small' type="submit" value="Submit"> Send Message</button>
        </form>
    </div>
    )
  }

}