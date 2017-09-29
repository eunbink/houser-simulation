import React, { Component } from 'react';
import authLogo from '../../assets/auth_logo.png';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends Component {

    render() {
        return (
            <div className="login">
                <div className = "loginContainer">
                        <img src={authLogo} className="authLogo" alt="logo" />
                        <p className='itemtext'>Name</p>
                        <input className='item_input' type='text' />
                        <p className='itemtext'>Price</p>
                        <input className='item_input' type='text' />
                            <button>Edit</button>
                            <button>Delete</button>
                    </div>
            </div>
        );
    }
}

export default Login;