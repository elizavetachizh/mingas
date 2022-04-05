import React from "react";
import imageContent from '../../../assets/png/mingaz_content.png'
import HandPhone from '../../../assets/png/Hand_phone.png'

import {DivImage, Image, DivContent, DivText, Text, DivHand} from "./styles";
import ButtonFun from "../../../components/button";


export default function ContentHome() {
   return (
          <DivImage>
              <Image src={imageContent}></Image>
              <DivContent>
                  <DivText>
                      <Text>Добро пожаловать на сайт <br/>
                          производственного республиканского <br/>
                          унитарного предприятия “МИНГАЗ”</Text>
                      <ButtonFun backgroundColor={"blue"} infoButton={"Подробнее"}></ButtonFun>
                  </DivText>
                  <DivHand src={HandPhone}></DivHand>
              </DivContent>
          </DivImage>
   )
}
