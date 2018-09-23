import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import DeviceMarker from "./DeviceMarker.jsx";

const DevicesMap = withScriptjs(withGoogleMap((props) => {
  const markers = props.devices.map(device => 
  <DeviceMarker
    key={device.id}
    device={device}
    location={{ lat: device.latitude, lng: device.longitude }}
    handleMarkerClick={props.handleMarkerClick}
  />);

  return (
    <GoogleMap
      defaultZoom={6}
      zoom={props.zoom}
      center={props.center}
      mapTypeId="hybrid"
      handleMarkerClick={props.handleMarkerClick}
    >
      {markers}
    </GoogleMap>
  );
}
));

export default DevicesMap;