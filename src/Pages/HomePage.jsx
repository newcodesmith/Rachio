import React, { Component } from "react";
import '../Styles/HomePage.css';
import Header from '../Components/Header';
import Devices from '../Components/Devices';
import LoadingScreen from 'react-loading-screen';
import Logo from '../assets/rachio-logo.png';
import DeviceMapContainer from '../Components/DeviceMapContainer';


class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            userData: null,
        }
    };

    getUserData() {

        fetch("https://api.rach.io/1/public/person/2ee8a9ca-741d-4b1a-add3-8a7683e5aa28", {
            headers: { "Authorization": "Bearer 76980330-8f0b-4659-a341-527364acf134" }
        })
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    userData: data
                })
            });
    };

    componentDidMount() {
        this.getUserData();
    };


    render() {
        if (!this.state.userData) {
            return (
                <LoadingScreen
                    loading={true}
                    bgColor='#00000'
                    spinnerColor='#9ee5f8'
                    textColor='#676767'
                    logoSrc={Logo}
                    text="Pssst.... It's me your lawn. I'm thirsty!"
                >
                </LoadingScreen>
            )
        }
        return (
            <div>
                <Header
                    userName={this.state.userData.fullName}
                />
                <div className="devices-sidebar">
                    <div className="spacer"></div>
                    <Devices
                        deviceData={this.state.userData.devices}
                    />
                </div>
                <DeviceMapContainer
                    devicesData={this.state.userData.devices}
                />
            </div>

        );
    }
}

export default HomePage;