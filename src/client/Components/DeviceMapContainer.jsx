import React, { Component } from "react";
import DevicesMap from "./DevicesMap";

class DevicesMapContainer extends Component {

    render() {
        return (
            <div>
                <div className="device-map-container">
                    <DevicesMap
                        devices={this.props.devicesData}
                        zoom={this.props.zoom}
                        center={this.props.center}
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?key= &v=3.exp&libraries=geometry,drawing,places`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: "93vh", width: "100%" }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        handleMarkerClick={this.props.handleMarkerClick}
                    />
                </div>
            </div>
        );
    }
};

export default DevicesMapContainer;