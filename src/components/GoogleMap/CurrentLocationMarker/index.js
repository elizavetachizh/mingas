import React from 'react';
import { InfoWindow, Marker } from '@react-google-maps/api';
import marker from '../../../assets/marker/location34.png';

export default function CurrentLocationMarker({ position }) {
  return (
    <Marker
      icon={{ url: marker }}
      position={position}
      label={{
        text: 'Вы находитесь здесь',
        fontFamily: 'Play',
        fontSize: '20px',
        color: 'black',
      }}
    />
  );
}
