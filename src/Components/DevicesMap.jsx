import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DeviceMarker from './DeviceMarker.jsx';

const DevicesMap = withScriptjs(withGoogleMap((props) => {

  const markers = props.devices.map(device => <DeviceMarker
    key={device.id}
    device={device}
    location={{ lat: device.latitude, lng: device.longitude }}
  />);

  return (
    <GoogleMap
      defaultZoom={6}
      center={{
        lat: 39.7392,
        lng: -104.9903
      }}
    >
      {markers}
    </GoogleMap>
  );
}
))

export default DevicesMap;