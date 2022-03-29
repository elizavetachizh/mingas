import React from "react";
import {ContainerServices, Imagecard, Textcard} from "./styles";

export default function LinkServices({img, text}) {
    return(
        <ContainerServices>
            <Imagecard src={img}></Imagecard>
            <Textcard>{text}</Textcard>
        </ContainerServices>
    )
}