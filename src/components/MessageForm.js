import React, {Component} from 'react'

class MessageForm extends Component {

  render(){
    return(
     <>   
        <div className='popup' id="popup">
        <a href="#messanger" className="popup__close">&times;</a>
            <div className='form-container'>
                <form className='form' onSubmit={this.props.onSubmit}>
                    <div className='form__group'>
                        <label className='form__label'>
                            Message:
                            <input className='form__input' type="text" name="content" value={this.props.content} onChange={this.props.onChange}/>
                        </label><br/>
                    </div>
                    <button className='btn btn--small' type="submit" value="Submit"> Send Message</button>
                </form>
            </div>
        </div>
    </>
    )
  }

}

export default MessageForm