import React from 'react';

import { Marker as GoogleMapMarker } from '@react-google-maps/api';

export default function Marker({ position }) {
  return <GoogleMapMarker position={position} />;
}
