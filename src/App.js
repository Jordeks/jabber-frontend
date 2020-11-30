import React from 'react'
import MessageContainer from './containers/MessageContainer'
import Home from './components/Home'
import { Route } from 'react-router-dom';
// import { useHistory } from 'react-router';
import Login from './components/Login.js'
import Signup from './components/Signup'

import { connect } from 'react-redux'




class App extends React.Component {

  render(){
    return (
      <div className='App'>
          <Route exact path='/login' component={Login} history={this.props.history}/>
          <Route exact path='/signup' component={Signup} history={this.props.history}/>
          <Route exact path="/" component={Home} history={this.props.history}/>
          { this.props.loggedIn ? 
          <Route exact path="/messages" component={MessageContainer} history={this.props.history} />
          :
          <Route exact path='/login' component={Login} history={this.props.history}/>
          }
          </div>
    );
  }
}
//not redirecting, the falsy case needs to get the component or look into using the private route!!
const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
  })
}

export default connect(mapStateToProps)(App)
