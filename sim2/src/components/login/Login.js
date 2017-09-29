import React, { Component } from 'react';
import authLogo from '../../assets/auth_logo.png';
import './Login.css';
import { Link } from 'react-router-dom';

class Login extends Component {

    render() {
        return (
            <div className="login">
                {/* <div className = "loginContainer"> */}
                    <div className='logocontainer'>
                        <img src={authLogo} className="App-logo" alt="logo" />
                    </div>
                    <div className="Shelflogo">
                        <h1>SHELFIE</h1>
                    </div>
                <div className='Item_content'>
                    {/* <div className='Left_content'>
                        <img src={logo2} className="item-photo" alt='item' />
                    </div> */}
                    <div className="Right_content">
                        <p className='itemtext'>Name</p>
                        <input className='item_input' type='text' />
                        <p className='itemtext'>Price</p>
                        <input className='item_input' type='text' />
                        <div>
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                    </div>
                  </div>
                {/* </div> */}
            </div>
        );
    }
}

export default Login;