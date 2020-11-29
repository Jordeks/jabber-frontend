import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'

class Home extends Component {

    onClick = (url) => {
        this.props.history.push(url)
    }

    render() {
        return (
        <>
            <Link to="/signup" onClick={() => this.onClick('/signup')}>Sign Up</Link> OR <Link to="/login" onClick={() => this.onClick('/login')}>Log In</Link>
            <header className="header">
                <div className='header__text-box'>
                    <h1 className='heading-primary'>
                    <span className='heading-primary--main'>Jabber</span>
                    <span className='heading-primary--sub'>Meet new friends around the world</span>
                    </h1>
                </div>
                
                <div className='header__btn'>
                    { this.props.loggedIn ? 
                    <button onClick={() => this.onClick('/messages')} className="btn">Try it out now</button>
                     :
                     <button onClick={() => this.onClick('/login')} className="btn">Login</button>
                    }
                    </div>
            </header>
        </>
        )
    }
}

const mapStateToProps = state => {
    return({
        loggedIn: !!state.currentUser
    })
}

export default connect(mapStateToProps)(Home)
