import React from "react";
import Checkbox from "./Checkbox";

class CheckboxContainer extends React.Component {

    render() {
        return (
            <React.Fragment>
                {
                    this.props.device.zones.map(zone => (
                        <label key={zone.id} className="multiple-zone-selection-container">
                            <Checkbox name={zone.id} checked={this.props.checkedItems.get(zone.id)} onChange={this.props.handleChange.bind(this)} />
                            <div className="zone-selection-img-container">
                                <img src={zone.imageUrl} alt="Zone Image" />
                            </div>
                            <div className="zone-selection-info">
                                <h3>{zone.name}</h3>
                            </div>
                        </label>
                    ))
                }
            </React.Fragment>
        );
    }
};

export default CheckboxContainer;