import React from "react";
import {DivNews,ImageLink,DateLink,TitleLink,DescLink} from "./styles";

export default function LinkNews({cardImg, cardDate, cardLink, cardDesc}) {
    return (
        <DivNews href={cardLink}>
            <ImageLink src={cardImg}></ImageLink>
            <DateLink>{cardDate}</DateLink>
            <DescLink>{cardDesc}</DescLink>
        </DivNews>
    )
}