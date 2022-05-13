import React from 'react';
import { GoogleMap } from '@react-google-maps/api';
import { DivMap } from './styles';
import { defaultTheme } from './styles';
import { Container } from '../../pages/styles';
import CurrentLocationMarker from './CurrentLocationMarker';
import Marker from './Marker';
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

export default function Map({ center, mode, markers, onMarkerAdd }) {
  const mapRef = React.useRef(undefined);
  const onLoad = React.useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    mapRef.current = undefined;
  }, []);

  const onClickFun = React.useCallback(
    (loc) => {
      if (mode === MODES.MOVE) {
        const lat = loc.latLng.lat();
        const lng = loc.latLng.lng();
        onMarkerAdd({ lat, lng });
      }
    },
    [mode, onMarkerAdd]
  );

  return (
    <Container>
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
          {markers.map((pos) => {
            return <Marker position={pos}></Marker>;
          })}
        </GoogleMap>
      </DivMap>
    </Container>
  );
}
