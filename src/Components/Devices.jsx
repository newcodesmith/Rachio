import React, { Component } from "react";
import Address from './Address';
import DeviceStatus from './DeviceStatus';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Devices extends Component {

    handleClick = (deviceInfo) => {
        const deviceClicked = {
            lat: deviceInfo.latitude,
            lng: deviceInfo.longitude
        }
        this.props.handleDeviceClick(deviceClicked)
    }

    render() {
        const deviceData = this.props.deviceData;

        return (

            deviceData.sort(function (a, b) {
                let nameA = a.name.toUpperCase();
                let nameB = b.name.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }
                return 0;
            }).map(deviceInfo => {
                return (
                    <div key={deviceInfo.id}
                        onClick={this.handleClick.bind(this, deviceInfo)}
                        className='device-container'
                    >
                        <div className='device-header'>
                            <h1>{deviceInfo.name}</h1>
                            <DeviceStatus
                                status={deviceInfo.status}
                            />
                        </div>
                        <div>
                            <Address
                                latitude={deviceInfo.latitude}
                                longitude={deviceInfo.longitude}
                                deviceId={deviceInfo.id}
                            />
                            <div
                                className="device-info-button">
                                <Link to={{
                                    pathname: `/deviceInfo/${deviceInfo.id}`,
                                    state: {
                                        deviceInfo: deviceInfo
                                    }
                                }}>
                                <p>Device Info</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            })
        )
    }
}

export default Devices;