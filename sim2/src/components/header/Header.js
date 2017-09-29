import React, { Component } from 'react';
import './Header.css'
import logo from '../../assets/header_logo.png'
import { Link } from 'react-router-dom'

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <div className='header_child'>
                    
                    <div className='header_left'>
                    <img className='header_logo' src={logo} />
                        <h3>Houser</h3><h3>Dashboard</h3>
                    </div>
                    <Link to='/' className='logout'><span>Logout</span></Link>
                    
                </div>
            </div>
        )
    }
}


export default Header;