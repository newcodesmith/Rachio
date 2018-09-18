import React, { Component } from "react";

class LastWateredDate extends Component {
    render() {
        const lastWateredDate = this.props.lastWateredDate;
        const waterDate = String(new Date(lastWateredDate));

        return (
            <div className="last-water-date">
                <p>Last Run: {waterDate}</p>
            </div>
        );
    }
}

export default LastWateredDate;