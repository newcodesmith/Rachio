import React, { Component } from "react";
import "../Styles/HomePage.css";
import Header from "../Components/Header";
import Devices from "../Components/Devices";
import LoadingScreen from "react-loading-screen";
import Logo from "../assets/rachio-logo.png";
import DeviceMapContainer from "../Components/DeviceMapContainer";

class HomePage extends Component {
    constructor() {
        super();
        this.state = {
            userData: null,
            isShown: false,
            sideBar: "devices-sidebar-hide",
            sideBarButton: "device-sidebar-button-hide",
            sideBarButtonTitle: "Show Devices",
            zoom: 5,
            center: {
                lat: 39.0997,
                lng: -94.5786
            }
        }
    };

    getUserData() {
        fetch("http://localhost:8888/userData")
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    userData: data
                })
            });
    };

    handleClickSideBar = () => {
        if (!this.state.isShown) {
            this.setState({
                isShown: true,
                sideBar: "devices-sidebar-show",
                sideBarButton: "device-sidebar-button-show",
                sideBarButtonTitle: "Hide Devices",
            })
        } else {
            this.setState({
                isShown: false,
                sideBar: "devices-sidebar-hide",
                sideBarButton: "device-sidebar-button-hide",
                sideBarButtonTitle: "Show Devices",
            })
        }
    };

    handleDeviceClick = (deviceClicked) => {
        this.setState({
            zoom: 20,
            center: {
                lat: deviceClicked.lat,
                lng: deviceClicked.lng
            }
        })
    };

    componentDidMount() {
        this.getUserData();
    };

    render() {
        if (!this.state.userData) {
            return (
                <LoadingScreen
                    loading={true}
                    bgColor="#00000"
                    spinnerColor="#9ee5f8"
                    textColor="#676767"
                    logoSrc={Logo}
                    text="Pssst.... It's me your lawn.I'm thirsty!"
                    children=""
                >
                </LoadingScreen>
            )
        };
        return (
            <div>
                <Header
                    userName={this.state.userData.fullName}
                />
                <div className={this.state.sideBar}>
                    <div className="spacer"></div>

                    <div
                        onClick={this.handleClickSideBar}
                        className={this.state.sideBarButton}
                    >
                        <p>{this.state.sideBarButtonTitle}</p>
                    </div>
                    <div>
                        <div className="spacer"></div>
                        <Devices
                            deviceData={this.state.userData.devices}
                            handleDeviceClick={this.handleDeviceClick}
                        />
                    </div>
                </div>
                <DeviceMapContainer
                    devicesData={this.state.userData.devices}
                    zoom={this.state.zoom}
                    center={this.state.center}
                />
            </div>
        );
    }
};

export default HomePage;