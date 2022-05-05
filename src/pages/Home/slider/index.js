import React from 'react';
import { Main, WindowDiv, WindowDivMaxWidth } from './styles';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import './styles.css';
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
            'arrows',
            'clickToChange',
            {
              resolve: autoplayPlugin,
              options: {
                interval: 4000,
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
              <ButtonFun href={'/Services'} backgroundColor={'blue'} infoButton={'Подробнее'} />
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
              <ButtonFun href={'/Press-Center'} backgroundColor={'blue'} infoButton={'Подробнее'} />
            </DivInformAbout>
            <img src={worker} alt={''} />
          </DivText>
        </Carousel>
      </WindowDiv>

      <WindowDivMaxWidth>
        <Text>
          Добро пожаловать на сайт <br />
          производственного республиканского <br />
          унитарного предприятия “МИНГАЗ”
        </Text>
        <DivInformAbout>
          <ButtonFun href={'/Services'} backgroundColor={'blue'} infoButton={'Подробнее'} />
          <img src={phone} alt={''} />
        </DivInformAbout>
      </WindowDivMaxWidth>
    </Main>
  );
}
