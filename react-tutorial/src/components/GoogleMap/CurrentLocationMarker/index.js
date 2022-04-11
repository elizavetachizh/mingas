import React from "react";
import {Marker} from "@react-google-maps/api";
import marker from "../../../assets/marker/location34.png"

export default function CurrentLocationMarker({position}) {
    return(
        <Marker
            icon={{url:marker, display:'flex',width:'20px', height: '20px'}}
            position={position}
            label={{text: 'You are here', fontFamily:'Bilbo', fontSize:'18px', color: '#314D5C'}}></Marker>
    )
}