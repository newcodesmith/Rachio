import React, { Component } from "react";

class DeviceStatus extends Component {
    render() {
        const status = this.props.status

        if (status === "OFFLINE") {
            return (
                <div className="device-status">
                    <h1>Offline</h1>
                    <div className="offline"></div>
                </div>
            );
        }
        return (
            <div className="device-status">
                <h1>Online</h1>
                <div className="online"></div>
            </div>
        )
    }
}

export default DeviceStatus;