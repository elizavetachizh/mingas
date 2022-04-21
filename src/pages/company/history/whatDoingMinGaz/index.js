import React from "react";
import {ContainderWhatDoingMinGaz,Png,DescDiv} from "./styles";

export default function WhatDoingMinGaz({cardImg, cardDesc}) {
    return(
        <ContainderWhatDoingMinGaz>
            <Png src={require(`../../../../assets/png/${cardImg}.svg`)} />
            <DescDiv>{cardDesc}</DescDiv>
        </ContainderWhatDoingMinGaz>
    )
}