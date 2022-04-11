import React from "react";
import {Container} from "../styles";
import HeaderCompany from "../header_company";
import Header from "../../../components/header";
import Footer from "../../../components/footer";
import Map, {MODES} from "../../../components/GoogleMap";
import {useJsApiLoader} from "@react-google-maps/api";
import AutoComplete from "../../../components/GoogleMap/AutoComplete";
import {DivMap, DivButtons} from "./styles"
import {GetBrowserLocation} from "../../../components/GoogleMap/utilsGeo";
import ButtonFun from "../../../components/button";
const API_KEY = process.env.REACT_APP_API_KEY;

const defaultCenter = {
    lat: 53.905812,
    lng: 27.602552
}

const libraries = ['places']
export default function Structure() {
    const [center, setCenter] = React.useState(defaultCenter)
    const [mode, setMode] = React.useState(MODES.MOVE)
    const [markers, setMarkers] = React.useState([])
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script-1',
        googleMapsApiKey: API_KEY,
        libraries,
    })

    const onPlaceSelect =  React.useCallback(
        (coordinates) => {
            setCenter(coordinates)
        }, []
    )

    const toggleMode = React.useCallback(() => {
        switch (mode) {
            case MODES.MOVE:
                setMode(MODES.SET_MARKER);
                break;
            case MODES.SET_MARKER:
                setMode(MODES.MOVE);
                break;
            default:
                setMode(MODES.MOVE)
        }
    }, [mode])

    const onMarkerAdd = React.useCallback((coordinates) => {
        setMarkers([...markers, coordinates]);
    }, [markers])


    const clear = React.useCallback(() => {
        setMarkers([])
    }, [])

    React.useEffect(()=> {
       GetBrowserLocation().then((curLoc)=> {
           setCenter(curLoc)
       })
            .catch((defaultLocation) => {
                setCenter(defaultLocation)
            })
    },[])

    return (
        <Container>
            <Header backgroundHeader="blue"></Header>
            <HeaderCompany currentPage={"Structure"}></HeaderCompany>
            <DivMap>
                <AutoComplete isLoaded={isLoaded} onSelect={onPlaceSelect}></AutoComplete>
           <DivButtons>
               <ButtonFun backgroundColor={"blue"} infoButton={"Установить маркер"} onClick={toggleMode}></ButtonFun>
               <ButtonFun backgroundColor={"blue"} infoButton={"Очистить маркер"} onClick={clear}></ButtonFun>
           </DivButtons>
                {isLoaded ?  <Map
                                center={center}
                                mode={mode}
                                markers={markers}
                                onMarkerAdd={onMarkerAdd}></Map> : <h2>Loading</h2>}
            </DivMap>
            <Footer></Footer>
        </Container>
    )
}