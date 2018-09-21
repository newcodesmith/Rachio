import React, { Component } from "react";

class DeviceMarkerInfo extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.device.name}</h1>
            </div>
        );
    }
};

export default DeviceMarkerInfo;