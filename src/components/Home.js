import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import sprite from '../img/sprite.svg'

class Home extends Component {

    onClick = (url) => {
        this.props.history.push(url)
    }

    render() {
        return (
        <>
            <nav className='nav'>
            <div className='nav__link-box'>
                    <span>
                            <svg className="icon--signup">
                                <use href={sprite + '#icon-add-user'} />
                            </svg>
                    </span>
                <NavLink to="/signup" className="nav__link" onClick={() => this.onClick('/signup')}>Sign Up</NavLink>  
            </div>
                <div className='nav__link-box'>
                    <span>
                            <svg className="icon--login">
                                <use href={sprite + '#icon-lock-open'} />
                            </svg>
                    </span>
                    <NavLink to="/login" className="nav__link" onClick={() => this.onClick('/login')}>Log In</NavLink>
                </div>
            </nav>
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
