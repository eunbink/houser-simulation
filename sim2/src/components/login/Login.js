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
                        <span className='itemtext'>Username</span>
                        <input className='item_input' type='text' />
                        <span className='itemtext'>Password</span>
                        <input className='item_input' type='text' />
                        <div className='buttonContainer'>
                           <Link to='/dashboard'> <button className = "loginbutton">Login</button></Link>
                            <Link to='/dashboard'><button className= "registerButton">Register</button></Link>
                            </div>
                    </div>
            </div>
        );
    }
}

export default Login;