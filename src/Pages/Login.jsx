import React, { Component } from "react";
import '../styles/Login.css';
import NameLogo from '../assets/rachio-name-logo.png';
import Logo from '../assets/rachio-logo.png';


class Login extends Component {
    render() {
        return (
            <div>
                <div className="login-page" style={{ backgroundImage: 'url(' + require('../assets/rachio-login.jpg') + ')' }}>
                <img className="name-logo" src={NameLogo} alt="Rachio Logo" height="100px"/> 
                        <div 
                        onClick={() => window.location = "/home"}
                        className="login-button">
                            <img className="logo" src={Logo} alt="Rachio Logo" height="50px"/>
                            <p>Login</p>
                        </div>
                </div>
            </div>
        );
    }
}

export default Login;