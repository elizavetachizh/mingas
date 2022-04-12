import React from "react";
import {images} from "../../../assets/images"
import {Main, WindowDiv} from "./styles";
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {DivContent, DivInformAbout, DivText, Text} from "../Content/styles";
import ButtonFun from "../../../components/button";

export default function CarouselFun() {

    return (
        <Main>
            <WindowDiv>
                <Carousel
                    plugins={[
                        'infinite',
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 5000,
                            }
                        },
                    ]}
                    animationSpeed={1000}
                >
                        <DivText>
                           <DivInformAbout>
                               <Text>Добро пожаловать на сайт <br/>
                                   производственного республиканского <br/>
                                   унитарного предприятия “МИНГАЗ”</Text>
                               <ButtonFun backgroundColor={"blue"} infoButton={"Подробнее"}></ButtonFun>
                           </DivInformAbout>
                            <img src={images[0].source}/>
                        </DivText>


                        <DivText>

                           <DivInformAbout>
                               <Text>dthytjusftgjfkj <br/>
                                   унитарного предприятия “МИНГАЗ”</Text>
                               <ButtonFun backgroundColor={"blue"} infoButton={"Подробнее"}></ButtonFun>
                           </DivInformAbout>
                            <img src={images[1].source}/>
                        </DivText>
                </Carousel>
            </WindowDiv>
        </Main>
    );
}