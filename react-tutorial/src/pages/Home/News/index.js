import React from "react";
import ButtonFun from "../../../components/button";
import {Container, DivInform} from "./styles";
import {Title} from "../useful_information/styles";
import {data} from '../../../assets/data_news'
import LinkNews from "./LinkToNews";


export default function News() {
    return(
        <Container>
            <Title>Новости предприятия</Title>
            <DivInform>
                {data.map((element)=> (
                   <LinkNews   key= {element.cardLink}

                               cardImg = {element.cardImg}
                               cardDate = {element.cardDate}
                               cardLink={element.cardLink}
                               cardDesc={element.cardDesc}>


                   </LinkNews>
                ))}
            </DivInform>
            <ButtonFun infoButton={"Показать ещё"} backgroundColor={"blue"}></ButtonFun>
        </Container>
    )
}