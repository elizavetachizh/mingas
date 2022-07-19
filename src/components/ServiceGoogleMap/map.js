import React, { useCallback, useRef, useState } from 'react';
import { GoogleMap, InfoWindow } from "@react-google-maps/api";
import { defaultTheme, DivMap } from '../GoogleMap/styles';
import CurrentLocationMarker from '../GoogleMap/CurrentLocationMarker';
import CurrentLocationMarkerForService from './CurrentLocationMarkerForService';
import { DivText } from '../../pages/Home/Content/styles';
const containerStyle = {
  width: '100%',
  height: '100%',
};
const textStyle = { fontFamily: 'Play', fontSize: '20px', color: 'black', position: 'absolute' };

const defaultOptions = {
  panControl: true,
  zoomControl: true,
  styles: defaultTheme,
  mapTypeControl: true,
  scaleControl: true,
  streetViewControl: true,
  rotateControl: true,
  clickableIcons: true,
  keyboardShortcuts: true,
  disableDoubleClickZoom: true,
  fullscreenControl: true,
};

export const MODES = {
  MOVE: 0,
  SET_MARKER: 1,
};

export default function MapService({ center, mode, onMarkerAdd }) {
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
      position: new window.google.maps.LatLng(54.00904364902689, 27.272372098678225),
      type: 'info',
      title: 'г.Заславль, ул.Советская, 79, тел. (017) 542-05-86',
    },
    {
      position: new window.google.maps.LatLng(53.853669, 27.700371),
      type: 'info',
      title: 'АГЗС №1 (д.Б.Тростинец, ул. Центральная, 41)',
    },
    {
      position: new window.google.maps.LatLng(53.84972491811442, 27.420723984936426),
      type: 'info',
      title: 'АГЗС №2 (д. Озерцо, р-н авторынка «Кольцо»)',
    },
    {
      position: new window.google.maps.LatLng(53.834617, 27.602392),
      type: 'info',
      title: 'АГЗС №6, ул.Уборевича, 109',
    },
    {
      position: new window.google.maps.LatLng(54.00904364902689, 27.272372098678225),
      type: 'info',
      title: 'г.Заславль, ул.Советская, 79, тел. (017) 542-05-86',
    },
    {
      position: new window.google.maps.LatLng(-33.91872, 151.23089),
      type: 'info',
      title: '',
    },
  ];
  const [activeMarker, setActiveMarker] = useState(false);
  const OpenInform = () => {
    setActiveMarker(true);
    if (activeMarker) {
      setActiveMarker(false);
    }
    console.log(activeMarker);
  };
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
          <CurrentLocationMarkerForService
            onOpen={() => OpenInform()}
            text={features[el].title}
            position={features[el].position}
          ><InfoWindow onCloseClick={()=>console.log('fff')}><p>fff</p></InfoWindow>
          </CurrentLocationMarkerForService>
        ))}
        {activeMarker && <DivText style={textStyle}>{features[0].title}</DivText>}
      </GoogleMap>
    </DivMap>
  );
}
