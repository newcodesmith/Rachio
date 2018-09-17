import React, { Component } from "react";
import ReactWeather from 'react-open-weather';
import 'react-open-weather/lib/css/ReactWeather.css';


class Weather extends Component {
    render() {
        const device = this.props.device;

        return (
            <div className='weather-container'>
                <ReactWeather
                    forecast="5days"
                    apikey="e73f82b08eb44e129c7152443181509"
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