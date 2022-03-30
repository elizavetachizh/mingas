import React from "react";
import ButtonFun from "../../../components/button";
import {data} from '../../../assets/data_service'
import {Container,ImageFont,DivInform, DivUp,Title, TitleCard,DivDown} from "./styles";
import worker from '../../../assets/png/worker.png'
import LinkServices from "./dataComponents";

export default function HomeServices() {
    return (
        <Container>
            <ImageFont src={worker}></ImageFont>
          <DivInform>
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

          </DivInform>
            <ButtonFun backgroundColor={"gray"} infoButton={"Перейти в раздел"}></ButtonFun>
        </Container>
    )
}
