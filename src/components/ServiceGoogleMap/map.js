import React, { useCallback, useRef } from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { defaultTheme, DivMap } from '../GoogleMap/styles';
import CurrentLocationMarker from '../GoogleMap/CurrentLocationMarker';
import Marker from '../GoogleMap/Marker';
const containerStyle = {
  width: '100%',
  height: '100%',
};

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  styles: defaultTheme,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  clickableIcons: false,
  keyboardShortcuts: false,
  disableDoubleClickZoom: false,
  fullscreenControl: false,
};

export const MODES = {
  MOVE: 0,
  SET_MARKER: 1,
};

export default function MapService({ center, mode, markers, onMarkerAdd }) {
  const numbersOfImages = Array.from({ length: 5 }, (v, k) => k + 1);
  const mapRef = useRef(undefined);
  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const onClickFun = useCallback(
    (loc) => {
      if (mode === MODES.SET_MARKER) {
        const lat = loc.latLng.lat();
        const lng = loc.latLng.lng();
        onMarkerAdd({ lat, lng });
      }
    },
    [mode, onMarkerAdd]
  );
  const features = [
    {
      position: new window.google.maps.LatLng(-33.91721, 151.2263),
      type: 'info',
    },
    {
      position: new window.google.maps.LatLng(-33.91539, 151.2282),
      type: 'info',
    },
    {
      position: new window.google.maps.LatLng(-33.91747, 151.22912),
      type: 'info',
    },
    {
      position: new window.google.maps.LatLng(-33.9191, 151.22907),
      type: 'info',
    },
    {
      position: new window.google.maps.LatLng(-33.91725, 151.23011),
      type: 'info',
    },
    {
      position: new window.google.maps.LatLng(-33.91872, 151.23089),
      type: 'info',
    },
  ];
  for (let i = 0; i < features.length; i++) {
    const marker = new window.google.maps.Marker({
      position: features[i].position,
    });
    console.log(marker);
  }
  return (
    <DivMap>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={onClickFun}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <CurrentLocationMarker position={center} />
        {numbersOfImages.map((el) => (
          <CurrentLocationMarker position={features[el].position} />
        ))}
        <CurrentLocationMarker position={features[0].position} />
        <CurrentLocationMarker position={features[1].position} />
        <CurrentLocationMarker position={features[2].position} />
        {markers.map((pos) => {
          return <Marker position={pos}></Marker>;
        })}
        {features.map((pos) => {
          return <Marker position={pos}></Marker>;
        })}
      </GoogleMap>
    </DivMap>
  );
}
