import React, { Component } from "react";
import DevicesMap from "./DevicesMap";

class DevicesMapContainer extends Component {

    render() {
        return (
            <div>
                <div className='device-map-container'>
                    <DevicesMap
                        devices={this.props.devicesData}
                        zoom={this.props.zoom}
                        center={this.props.center}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCrrwvKb76YQoqkyv2O6BnjBE5Ib_j-b7A&v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: '91.6vh', width: '100%' }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
            </div>
        );
    }
}

export default DevicesMapContainer;