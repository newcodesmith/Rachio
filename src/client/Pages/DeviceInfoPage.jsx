import React, { Component } from "react";
import Header from "../Components/Header";
import DeviceInfoSideBar from "../Components/DeviceInfoSideBar";
import "../Styles/DeviceInfoPage.css";
import DeviceZones from "../Components/DeviceZones";
import Weather from "../Components/Weather";
import OneZoneModal from "../Components/OneZoneModal";
import MultipleZoneModal from "../Components/MultipleZoneModal";
import LoadingScreen from "react-loading-screen";
import Logo from "../assets/rachio-logo.png";


class DeviceInfoPage extends Component {
    constructor() {
        super();
        this.state = {
            zoneId: null,
            zoneName: null,
            oneZoneModalIsShown: false,
            multipleZoneModalIsShown: false,
            deviceData: null
        }
    };

    getDeviceInfo() {
        const deviceId = this.props.location.state.deviceInfo.id
        
        fetch(`http://localhost:8888/deviceData/${deviceId}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.setState({
                    deviceData: data
                })
            });
    };

    runZone = (runZoneInfo) => {
        return fetch("https://api.rach.io/1/public/zone/start", {
            method: "PUT",
            headers: {
                "Authorization": "Bearer ",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(runZoneInfo)
        })
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(() => setTimeout(() => { this.getDeviceInfo() }, 5000));
    };

    MultipleRunZone = (runZonesInfo) => {
        return fetch("https://api.rach.io/1/public/zone/start_multiple", {
            method: "PUT",
            headers: {
                "Authorization": "Bearer ",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ zones: runZonesInfo })
        })
            .then(response => response.json())
            .catch(err => console.log(err))
            .then(() => setTimeout(() => { this.getDeviceInfo() }, 5000));
    };

    openOneZoneModal = (zoneId, zoneName) => {
        this.setState({ oneZoneModalIsShown: !this.state.oneZoneModalIsShown });
        this.setState({ zoneId: zoneId });
        this.setState({ zoneName: zoneName });
    };

    closeOneZoneModal = () => {
        this.setState({ oneZoneModalIsShown: !this.state.oneZoneModalIsShown });
    };

    openMultipleZoneModal = () => {
        this.setState({ multipleZoneModalIsShown: !this.state.multipleZoneModalIsShown });
    };

    closeMultipleZoneModal = () => {
        this.setState({ multipleZoneModalIsShown: !this.state.multipleZoneModalIsShown });
    };

    componentWillMount() {
        const { handle } = this.props.match.params;
        this.getDeviceInfo()
    };

    render() {
        const device = this.state.deviceData;
        
        if (!device) {
            return (
                <LoadingScreen
                    loading={true}
                    bgColor="#00000"
                    spinnerColor="#9ee5f8"
                    textColor="#676767"
                    logoSrc={Logo}
                    text="Are you smarter than a Rachio controller?"
                    children=""
                >
                </LoadingScreen>
            )
        };
        return (
            <div>
                <Header />
                <DeviceInfoSideBar
                    device={device}
                    openMultipleZoneModal={this.openMultipleZoneModal}
                />
                <div className="device-zones-info-container">
                    <Weather
                        device={device}
                    />
                    <div className="device-zones-container">
                        <DeviceZones
                            device={device}
                            deviceNotifications={this.state.deviceNotifications}
                            openOneZoneModal={this.openOneZoneModal}
                        />
                    </div>
                </div>
                <div>
                    {this.state.oneZoneModalIsShown ?
                        <OneZoneModal
                            zoneId={this.state.zoneId}
                            zoneName={this.state.zoneName}
                            closeOneZoneModal={this.closeOneZoneModal}
                            getDeviceInfo={this.getDeviceInfo}
                            runZone={this.runZone}
                        /> : null}
                </div>
                <div>
                    {this.state.multipleZoneModalIsShown ?
                        <MultipleZoneModal
                            device={device}
                            closeMultipleZoneModal={this.closeMultipleZoneModal}
                            getDeviceInfo={this.getDeviceInfo}
                            MultipleRunZone={this.MultipleRunZone}
                        /> : null}
                </div>
            </div>
        );
    }
};

export default DeviceInfoPage;