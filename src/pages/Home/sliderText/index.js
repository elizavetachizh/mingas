import React from "react";
import {WindowDiv, Main} from "../slider/styles";
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import {text} from "../../../assets/textCarousel";

export default function CarouselText() {
    return(
        <Main>
            <WindowDiv>
                <Carousel
                    plugins={[
                        'infinite',
                        'arrows',
                        {
                            resolve: autoplayPlugin,
                            options: {
                                interval: 2000,
                            }
                        },
                    ]}
                    animationSpeed={500}
                >
                    <div>{text[0].text}</div>
                    <div>{text[1].text}</div>
                </Carousel>
            </WindowDiv>
        </Main>
    )
}