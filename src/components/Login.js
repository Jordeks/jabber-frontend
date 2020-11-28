import React, { Component } from 'react'

export default class Login extends Component {

  state = {
    username: '',
    password: ''
}

onChange = e => {
    const { name, value } = e.target
    this.setState({[name]: value})
}

onSubmit = e => {
    e.preventDefault()
    alert('am submitted')
    // this.props.login(this.state)
    // this.setState({
    //     username: '',
    //     password: ''
    // })
}

  render() {
    console.log(this.state)
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input placeholder="username" value={this.state.username} name="username" type="text" onChange={this.onChange} />
          <input placeholder="password" value={this.state.password} name="password" type="password" onChange={this.onChange} />
          <input type="submit" value="Log In"/>
        </form>
      </div>
    )
  }
}
