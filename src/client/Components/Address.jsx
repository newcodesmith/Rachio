import React, { Component } from "react";
import Geocode from "react-geocode";

class Address extends Component {
    constructor() {
        super();
        this.state = {
            "address": []
        }
    };

    getAddress() {
        const latitude = this.props.latitude;
        const longitude = this.props.longitude;

        Geocode.setApiKey("");

        Geocode.fromLatLng(latitude, longitude).then(
            response => {
                const address = response.results[0].formatted_address;
                this.setState({ address: address })
            },
            error => {
                console.error(error);
            }
        );
    };

    componentDidMount() {
        this.getAddress();
    };

    render() {
        const deviceId = this.props.deviceId;

        if (!this.state.address) {
            return <div />
        }
        return (
            <div key={`${deviceId}-address`} className="address">
                <p>{this.state.address}</p>
            </div>
        );
    }
};

export default Address;