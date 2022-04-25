import React from 'react';
import { images } from '../../../assets/images';
import { Main, WindowDiv } from './styles';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { DivInformAbout, DivText, Text } from '../Content/styles';
import ButtonFun from '../../../components/button';
import phone from '../../../assets/png/Hand_phone.png';
import worker from '../../../assets/png/master.png';

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
              },
            },
          ]}
          animationSpeed={1000}
        >
          <DivText>
            <DivInformAbout>
              <Text>
                Добро пожаловать на сайт <br />
                производственного республиканского <br />
                унитарного предприятия “МИНГАЗ”
              </Text>
              <ButtonFun backgroundColor={'blue'} infoButton={'Подробнее'} />
            </DivInformAbout>
            <img src={phone} alt={''} />
          </DivText>

          <DivText>
            <DivInformAbout>
              <Text>
                Актуальные новости
                <br />
                унитарного предприятия “МИНГАЗ”
              </Text>
              <ButtonFun backgroundColor={'blue'} infoButton={'Подробнее'} />
            </DivInformAbout>
            <img src={worker} alt={''} />
          </DivText>
        </Carousel>
      </WindowDiv>
    </Main>
  );
}
