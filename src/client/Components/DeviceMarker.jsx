import React, { Component } from "react";
import { Marker } from "react-google-maps";
import RachioMarker from "../assets/rachio-marker.png";

class DeviceMarker extends Component {
    constructor() {
        super();
        this.state = {
            isShown: false,
        }
    };

    render() {
        const device = this.props.device
        const location = this.props.location
        return (
            <Marker
                position={location}
                icon={RachioMarker}
                onClick={() => this.props.handleMarkerClick(device)}
                title={`${device.name} ${device.status}`}
            >
            </Marker>
        );
    }
};

export default DeviceMarker;