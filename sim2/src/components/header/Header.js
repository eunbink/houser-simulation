import React, { Component } from 'react';
import './Header.css'

import logo from '../../assets/header_logo.png'


class Header extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <div className='header'>
                <div className='header_child'>
                    <img className='header_logo' src={logo}/>
                </div>
            </div>
        )
    }
}


export default Header;