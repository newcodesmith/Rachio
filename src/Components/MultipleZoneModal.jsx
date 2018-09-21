import React, { Component } from "react";
import MultipleZoneSelection from "./MultipleZoneSelection.jsx";

class MultipleZoneModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedItems: new Map(),
            time: 0,
            zones: [],
        };
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(e) {
        const id = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(id, isChecked) }));
    };

    MultipleZoneHandleSubmit = (e) => {
        e.preventDefault();
        const runTime = this.state.time * 60;
        const runZonesInfo = [];
        const deviceZones = this.props.device.zones;
        const checkedItems = this.state.checkedItems;
        const singSelectedZone = deviceZones.map(zone => {
            if ((checkedItems.get(zone.id)) === true) {
                runZonesInfo.push({ id: zone.id, duration: runTime, sortOrder: zone.zoneNumber });
            }
        })[0];
        return this.props.MultipleRunZone(runZonesInfo)
            .then(this.props.closeMultipleZoneModal.bind(this))
    };

    IncrementItem = () => {
        this.setState({ time: this.state.time + 1 });
    };

    DecreaseItem = () => {
        if (this.state.time === 0) {
        } else {
            this.setState({ time: this.state.time - 1 });
        }
    };

    render() {

        return (
            <div className="multiple-zone-time-modal">
                <div className="multiple-zone-time-add">
                    <div className="time-header">
                        <h1>Run Zones</h1>
                    </div>
                    <div className="time-modal-time">
                        <h3>Run Time</h3>
                        <div className="add-time-container">
                            <div className="minutes">
                                <h1>{this.state.time} Minutes</h1>
                            </div>
                            <div className="add-time-buttons">
                                <div className="time-button" onClick={this.IncrementItem}>+</div>
                                <div className="time-button" onClick={this.DecreaseItem}>-</div>
                            </div>
                        </div>
                    </div>
                    <div className="devices-selection">
                        <MultipleZoneSelection
                            device={this.props.device}
                            handleChange={this.handleChange}
                            checkedItems={this.state.checkedItems}
                        />
                    </div>
                    <div className="time-modal-buttons">
                        <div
                            className="run-zone-button"
                            onClick={this.props.closeMultipleZoneModal.bind(this)}
                        >
                            <p>Cancel</p>
                        </div>
                        <div
                            onClick={this.MultipleZoneHandleSubmit}
                            className="run-zone-button"
                        >
                            <p>Run Zones</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default MultipleZoneModal;