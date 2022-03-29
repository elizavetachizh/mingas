import React from "react";
import ButtonFun from "../../../components/button";
import {data} from '../../../assets/data_service'
import {Container, DivUp,Title, TitleCard,DivDown} from "./styles";
import LinkServices from "./dataComponents";

export default function HomeServices() {
    return (
        <Container>
            <Title>УСЛУГИ РЕСПУБЛИКАНСКОГО УНИТАРНОГО ПРЕДПРИЯТИЯ “МИНГАЗ”</Title>
            <DivUp>
                <TitleCard>НАСЕЛЕНИЮ</TitleCard>
                <TitleCard>ЮРИДИЧЕСКИМ ЛИЦАМ</TitleCard>
            </DivUp>
            <DivDown>
                {data.map((element)=> (
                    <LinkServices
                        key={element.cardDesc}
                        img={element.cardImg}
                        text={element.cardDesc}
                    ></LinkServices>
                ))}
            </DivDown>


            <ButtonFun infoButton={"Перейти в раздел"}></ButtonFun>
        </Container>
    )
}
