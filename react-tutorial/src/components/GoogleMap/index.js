import React, {Component} from "react";
import {GoogleMap, Marker} from "@react-google-maps/api";
import {DivMap} from "./styles";
import {defaultTheme} from "./styles";
import {Container} from "../../pages/styles";
import CurrentLocationMarker from "./CurrentLocationMarker";
const containerStyle = {
    width: '100%',
    height: '100%'
};

const defaultOptions = {
    panControl: true,
    zoomControl: true,
    styles: defaultTheme
}
export default function Map({center}) {
    const mapRef = React.useRef(undefined)
    const onLoad = React.useCallback(function callback(map) {
        mapRef.current = map;
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        mapRef.current = undefined;
    }, [])

    return(
    <Container>
        <DivMap>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOptions}
            >
               <CurrentLocationMarker position={center}></CurrentLocationMarker>
            </GoogleMap>
        </DivMap>
    </Container>
    )
}

