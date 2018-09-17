import React, { Component } from "react";
import '../Styles/Header.css';
import NameLogo from '../assets/rachio-name-logo1.png';

class Header extends Component {
    render() {
        return (
            <div className="nav-bar">
                <div className="nav-logo">
                    <img className="name-logo" src={NameLogo} alt="Rachio Logo" height="50px" />
                </div>
            </div>
        );
    }
}

export default Header;