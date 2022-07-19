import styled from 'styled-components';
import React, { useState } from 'react';

import { InfoWindow, Marker } from '@react-google-maps/api';
import marker from '../../assets/marker/location34.png';
export default function CurrentLocationMarkerForService({ text, position, onOpen = {} }) {
  const [activeMarker, setActiveMarker] = useState(null);
  const handleActiveMarker = () => {
    setActiveMarker('fgdfjkgmndlikrfg');
    console.log(activeMarker);
  };
  return (
    <Marker
      onClick={() => onOpen()}
      position={position}
      label={{
        text: text,
        fontFamily: 'Play',
        fontSize: '20px',
        color: 'black',
        display: 'flex'
      }}
    >
    </Marker>
  );
}
