import React, {useCallback, useState} from "react";
import {Container} from "../styles";
import HeaderCompany from "../header_company";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Map from "../../../components/GoogleMap";
import {useJsApiLoader} from "@react-google-maps/api";
import AutoComplete from "../../../components/GoogleMap/AutoComplete";
import {DivMap} from "./styles"
import ButtonMap from "../../../components/GoogleMap/ButtonMap";
const API_KEY = process.env.REACT_APP_API_KEY;
console.log(API_KEY);
const defaultCenter = {
    lat: 53.905812,
    lng: 27.602552
}

const libraries = ['places']
export default function Structure() {
    const [center, setCenter] = useState(defaultCenter)
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script-1',
        googleMapsApiKey: API_KEY,
        libraries
    })

    const onPlaceSelect =  useCallback(
        (coordinates) => {
            setCenter(coordinates)
        }, []
    )

    return (
        <Container>
            <Header backgroundHeader="blue"></Header>
            <HeaderCompany currentPage={"Structure"}></HeaderCompany>
            <DivMap>
                <AutoComplete isLoaded={isLoaded} onSelect={onPlaceSelect}></AutoComplete>
                <ButtonMap></ButtonMap>
                {isLoaded ?  <Map center={center}></Map> : <h2>Loading</h2>}
            </DivMap>
            <Footer></Footer>
        </Container>
    )
}