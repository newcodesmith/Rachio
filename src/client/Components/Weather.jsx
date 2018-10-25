import React, { Component } from "react";
import ReactWeather from "react-open-weather";
import "react-open-weather/lib/css/ReactWeather.css";

class Weather extends Component {
    render() {
        const device = this.props.device;

        return (
            <div className="weather-container">
                <ReactWeather
                    forecast="5days"
                    apikey=""
                    unit="imperial"
                    type="geo"
                    lat={`${device.latitude}`}
                    lon={`${device.longitude}`}
                />
            </div>
        );
    }
}

export default Weather;