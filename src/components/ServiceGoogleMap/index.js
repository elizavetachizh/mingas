import React, { useState } from 'react';
import { GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { obmenie_puncti } from '../../assets/data/data-address_obmenie_puncti';
import { useLoadScript } from '@react-google-maps/api';
const API_KEY = process.env.REACT_APP_API_KEY;
const libraries = ['places'];

function Map() {
  const [activeMarker, setActiveMarker] = useState('');
  console.log(activeMarker);
  return (
    <GoogleMap defaultZoom={10} defaultCenter={{ lat: 53.905812, lng: 27.602552 }}>
      {obmenie_puncti.map((el) => (
        <Marker
          position={{ lat: el.position[0], lng: el.position[1] }}
          onClick={() => setActiveMarker(el)}
        />
      ))}
      {activeMarker && (
        <InfoWindow
          position={{
            lat: activeMarker.position[0],
            lng: activeMarker.position[1],
          }}
        >
          <div>
            <p>{activeMarker?.title}</p>
            {activeMarker?.inform}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const WrapperMap = withScriptjs(withGoogleMap(Map));
export default function MapServiceObmeniePuncti() {
  const { isLoaded, loadError } = useLoadScript({
    id: 'google-map-script-1',
    googleMapsApiKey: API_KEY,
    libraries,
  });
  if (loadError) return 'Ошибка загрузки карты...';
  return (
    <>
      {isLoaded ? (
        <div style={{ width: '100%', height: '100%' }}>
          <WrapperMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          ></WrapperMap>
        </div>
      ) : (
        'Карта загружается, пожалуйста, подождите...'
      )}
    </>
  );
}
