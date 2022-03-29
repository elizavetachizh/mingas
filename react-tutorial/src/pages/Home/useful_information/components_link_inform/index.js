import React from "react";
import {ContentLink, ImageLink, TextLink} from "./styles";

export default function LinkInform({cardImg, cardDesc}) {
    return (
        <ContentLink>
            <ImageLink src={cardImg}></ImageLink>
            <TextLink>{cardDesc}</TextLink>
        </ContentLink>
    )
}