import React from "react";
import {Container, Title, DivInform} from "./styles";
import ButtonFun from '../../../components/button/index';
import LinkInform from "./components_link_inform";
import {data} from "../../../assets/data";

export default function UsefulInform() {
   return (
       <Container>
           <Title>Полезная информация</Title>
           <DivInform>
               {data.map((element)=> (
                   <LinkInform
                   key={element.cardDesc}
                   cardImg={element.cardImg}
                   cardDesc={element.cardDesc}>

                   </LinkInform>
               ))}
           </DivInform>
           <ButtonFun infoButton={"Подробнее"}></ButtonFun>
       </Container>
   )
}