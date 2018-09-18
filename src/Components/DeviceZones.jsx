import React, { Component } from "react";
import LastWateredDate from './LastWateredDate';

class DeviceZones extends Component {

    render() {
        const zones = this.props.device.zones
        return (
            zones.sort((a, b) => parseFloat(a.zoneNumber) - parseFloat(b.zoneNumber)).map(zone => {
                return (
                    <div key={zone.id} className='device-zone'>
                        <div>
                            <div className='device-zone-img-container'>
                                <img src={zone.imageUrl} alt="Zone Image" />
                            </div>
                            <div className='device-zone-info'>
                                <h3>{zone.name}</h3>
                            </div>
                            <div>
                                <LastWateredDate
                                    lastWateredDate={zone.lastWateredDate}
                                />
                            </div>
                            <div
                                onClick={this.props.openOneZoneModal.bind(this, zone.id, zone.name)}
                                className="device-zone-button"
                            >
                                <p>Quick Run</p>
                            </div>
                        </div>
                    </div>
                )
            })
        );
    }
}

export default DeviceZones;