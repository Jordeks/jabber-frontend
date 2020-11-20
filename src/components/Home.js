import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
        <>
            <header className="header">
                <div className='header__text-box'>
                    <h1 className='heading-primary'>
                    <span className='heading-primary--main'>Jabber</span>
                    <span className='heading-primary--sub'>Meet new friends around the world</span>
                    </h1>
                </div>
                <div className='header__btn'>
                    <NavLink to='/messages' exact className="btn">Try it out now</NavLink>
                </div>
            </header>
        </>
        )
    }
}
