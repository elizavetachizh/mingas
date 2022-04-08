import React from "react";
import {Marker} from "@react-google-maps/api";
import marker from "../../../assets/marker/markerMaps.png"

export default function CurrentLocationMarker({position}) {
    return(
        <Marker position={position} label={{text: 'You are here'}}></Marker>
    )
}