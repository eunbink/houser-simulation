import React, { Component } from "react";
import authLogo from "../../assets/auth_logo.png";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { connect } from "react-redux";
import { updateUserName, updatePassword } from "../../ducks/reducer";

class Login extends Component {
  handleLogin() {}

  render() {
    const { updateUserName, updatePassword } = this.props;
    return (
      <div className="login">
        <div className="loginContainer">
          <img src={authLogo} className="authLogo" alt="logo" />
          <span className="itemtext">Username</span>
          <input
            className="item_input"
            type="text"
            onChange={e => {
              updateUserName(e.target.value);
            }}
          />
          <span className="itemtext">Password</span>
          <input
            className="item_input"
            type="text"
            onChange={e => {
              updatePassword(e.target.value);
            }}
          />
          <div className="buttonContainer">
            <Link to="/dashboard">
              {" "}
              <button className="loginbutton" onClick={handleLogin}>
                Login
              </button>
            </Link>
            <Link to="/dashboard">
              <button className="registerButton">Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { updateUserName, updatePassword } = state;
  return {
    userName,
    password
  };
}

export default connect(mapStateToProps, { updateUserName, updatePassword })(
  Login
);
