import React, { Component } from "react";

class OneZoneModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 0,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const runTime = this.state.time * 60;
        const runZoneInfo = {
            id: this.props.zoneId,
            duration: runTime
        }
        this.props.runZone(runZoneInfo)
            .then(this.props.closeOneZoneModal.bind(this))
    }

    IncrementItem = () => {
        this.setState({ time: this.state.time + 1 });
    }

    DecreaseItem = () => {
        if (this.state.time === 0) {
        } else {
            this.setState({ time: this.state.time - 1 });
        }
    }

    render() {
        const zoneName = this.props.zoneName;

        return (
            <div className='time-modal'>
                <div className='time-add'>
                    <div className='time-header'>
                        <h1>Run {zoneName}</h1>
                    </div>
                    <div className='time-modal-time'>
                        <h3>Run Time</h3>
                        <div className='add-time-container'>
                            <div className='minutes'>
                                <h1>{this.state.time} Minutes</h1>
                            </div>
                            <div className='add-time-buttons'>
                                <div className="time-button" onClick={this.IncrementItem}>+</div>
                                <div className="time-button" onClick={this.DecreaseItem}>-</div>
                            </div>
                        </div>
                    </div>
                    <div className='time-modal-buttons'>
                        <div
                            className="run-zone-button"
                            onClick={this.props.closeOneZoneModal.bind(this)}
                        >
                            <p>Cancel</p>
                        </div>
                        <div
                            onClick={this.handleSubmit}
                            className="run-zone-button"
                        >
                            <p>Run Zone</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OneZoneModal;