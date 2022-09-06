import React from 'react';

import Header from '../../components/header';
import minsk from '../../assets/background/sertifikacia.jpg';
import HeaderFeedBack from './HeaderFeedBack';
import { Divbackground, DivImage, Text } from './styles';
import Footer from '../../components/footer';
import { Parallax } from 'react-parallax';
import imageContent from '../../assets/background/mingas_background(2).jpg';
import { DivContent, DivPrizes, Prizes } from '../Home/Content/styles';
import CarouselFun from '../Home/slider';
const styled = {
  background: `url(${minsk})  no-repeat`,
  // backgroundSize: 'cover',
};
export default function Feedback() {
  return (
    <>
      <Divbackground>
        <DivImage>
          <img src={minsk}></img>
        </DivImage>
        <Text>
          {' '}
          <p>ИСТОРИЯ</p>
        </Text>
      </Divbackground>
    </>
  );
}
