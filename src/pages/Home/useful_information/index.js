import React from "react";
import {DivUsefulInform,Title, DivInform} from "./styles";
import {Container} from "../styles";
import ButtonFun from '../../../components/button';
import LinkInform from "./components_link_inform";
import {data} from "../../../assets/data";
import background from '../../../assets/background/background.png'
import linesOne from "../../../assets/background/linesOne.png";
import {BackgroundStyle} from "../services/styles";

export default function UsefulInform() {
   return (
       <Container src={background}>
           <BackgroundStyle src={linesOne}>

           </BackgroundStyle>
          <DivUsefulInform>
              <Title>Полезная информация</Title>
              <DivInform>
                  {data.map((element) => (
                      <LinkInform
                          key={element.cardDesc}
                          cardImg={element.cardImg}
                          src={element.cardImg}
                          cardDesc={element.cardDesc}>

                      </LinkInform>
                  ))}
              </DivInform>
              <ButtonFun backgroundColor={"blue"} justifyContent={"center"} infoButton={"Подробнее"}></ButtonFun>
          </DivUsefulInform>
       </Container>
   )
}