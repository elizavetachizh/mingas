import React from "react";
import imageContent from '../../../assets/png/mingaz_content.png'
import {DivImage, Image, DivContent, DivText, Text} from "./styles";
import ButtonFun from "../../../components/button";
import CarouselFun from "../slider";
import CarouselText from "../sliderText";

export default function ContentHome() {

   return (
          <DivImage>
              <Image src={imageContent}></Image>
              <DivContent>
              {/*    <DivText>*/}
              {/*        <Text>Добро пожаловать на сайт <br/>*/}
              {/*            производственного республиканского <br/>*/}
              {/*            унитарного предприятия “МИНГАЗ”</Text>*/}
              {/*        <ButtonFun backgroundColor={"blue"} infoButton={"Подробнее"}></ButtonFun>*/}
              {/*    </DivText>*/}
                 <CarouselFun></CarouselFun>
              </DivContent>
          </DivImage>
   )
}
