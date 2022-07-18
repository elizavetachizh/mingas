import React, { useCallback, useEffect, useState } from 'react';
import MapService, { MODES } from './map';
import { DivMap } from '../GoogleMap/styles';
import AutoComplete from '../GoogleMap/AutoComplete';
import { defaultCenter, GetBrowserLocation } from '../GoogleMap/utilsGeo';
import { useJsApiLoader } from '@react-google-maps/api';
const API_KEY = process.env.REACT_APP_API_KEY;

const libraries = ['places'];

export default function ServiceGoogleMap() {
  const [center, setCenter] = useState(defaultCenter);
  const [mode, setMode] = useState(MODES.MOVE);
  const [markers, setMarkers] = useState([]);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script-1',
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const onPlaceSelect = useCallback((coordinates) => {
    setCenter(coordinates);
  }, []);

  const toggleMode = useCallback(() => {
    switch (mode) {
      case MODES.MOVE:
        setMode(MODES.SET_MARKER);
        break;
      case MODES.SET_MARKER:
        setMode(MODES.MOVE);
        break;
      default:
        setMode(MODES.MOVE);
    }
  }, [mode]);

  const onMarkerAdd = useCallback(
    (coordinates) => {
      setMarkers([...markers, coordinates]);
    },
    [markers]
  );

  const clear = useCallback(() => {
    setMarkers([]);
  }, []);

  useEffect(() => {
    GetBrowserLocation()
      .then((curLoc) => {
        setCenter(curLoc);
      })
      .catch((defaultLocation) => {
        setCenter(defaultLocation);
      });
  }, []);
  return (
    <>
      {/*<AutoComplete isLoaded={isLoaded} onSelect={onPlaceSelect} />*/}
      {isLoaded ? (
        <MapService center={center} mode={mode} markers={markers} onMarkerAdd={onMarkerAdd} />
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}
