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
        return (
            <Marker
                position={this.props.location}
                icon={RachioMarker}
                onClick={() => window.location = "/deviceInfo?" + this.props.device.id}
                title={`${this.props.device.name} ${this.props.device.status}`}
            >
            </Marker>
        );
    }
};

export default DeviceMarker;