import React, { Component } from "react";
import RachioGen2 from '../assets/rachio-gen2.png';
import RachioGen3 from '../assets/rachio-gen3.png';

class DeviceImage extends Component {
    render() {
        const deviceModel = this.props.deviceModel;

        if (deviceModel === 'GENERATION2_8ZONE') {
            return (
                <div>
                    <img src={RachioGen2} alt="Rachio Gen 2 Controller" />
                </div>
            )
        } else if (deviceModel === 'GENERATION2_16ZONE') {
            return (
                <div>
                    <img src={RachioGen2} alt="Rachio Gen 2 Controller" />
                </div>
            )
        } else if (deviceModel === 'GENERATION3_8ZONE') {
            return (
                <div>
                    <img src={RachioGen3} alt="Rachio Gen 3 Controller" />
                </div>
            )
        } else if (deviceModel === 'GENERATION3_16ZONE') {
            return (
                <div>
                    <img src={RachioGen3} alt="Rachio Gen 3 Controller" />
                </div>
            )
        }
    }
}

export default DeviceImage;

