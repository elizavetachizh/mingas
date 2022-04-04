import React from "react";
import {Container, Title, DivInform} from "./styles";
import ButtonFun from '../../../components/button/index';
import LinkInform from "./components_link_inform";
import {data} from "../../../assets/data";
import background from '../../../assets/background/background.png'

export default function UsefulInform() {
   return (
       <Container src={background}>
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
       </Container>
   )
}