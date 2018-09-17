import React, { Component } from 'react';
import { hot } from "react-hot-loader";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage.jsx';
import Login from './Pages/Login.jsx';
import DeviceInfo from './Pages/DeviceInfoPage';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Login} />
                    <Route path="/home" component={HomePage} />
                    <Route path="/deviceInfo" component={DeviceInfo} />
                </div>
            </Router>
        );
    }
}

export default hot(module)(App);