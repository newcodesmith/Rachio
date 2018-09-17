import React, { Component } from "react";
import DeviceStatus from "./DeviceStatus.jsx";
import DeviceImage from "./DeviceImage.jsx";
import InfoPageAddress from './InfoPageAddress.jsx'

class DeviceInfoSideBar extends Component {
    render() {
        const device = this.props.device;
        return (
            <div className='device-info-sidebar'>
                <div className='device-header'>
                    <h1>{device.name}</h1>
                    <DeviceStatus
                        status={device.status}
                    />
                </div>
                <DeviceImage
                    className='device-image'
                    deviceModel={device.model}
                />
                <InfoPageAddress
                    latitude={device.latitude}
                    longitude={device.longitude}
                    deviceId={device.id}
                />
                <h2>Model: {device.model}</h2>
                <h3>Serial Number: {device.serialNumber}</h3>
                <h3>MAC Address: {device.macAddress}</h3>
                <div
                    onClick={this.props.openMultipleZoneModal.bind(this)}
                    className="device-zone-button"
                >
                    <p>Run Zones</p>
                </div>
            </div>
        );
    }
}

export default DeviceInfoSideBar;