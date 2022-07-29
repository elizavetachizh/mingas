import React from 'react';
import { Container } from '../Home/styles';
import Header from '../../components/header';
import minsk from '../../assets/background/minsk.jpg';
import HeaderFeedBack from './HeaderFeedBack';
import { Divbackground, DivImage } from './styles';
import Footer from '../../components/footer';
import { Parallax } from 'react-parallax';
import imageContent from "../../assets/background/mingas_background(2).jpg";
import { DivContent, DivPrizes, Prizes } from "../Home/Content/styles";
import CarouselFun from "../Home/slider";
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
export default function Feedback() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <HeaderFeedBack />
      {/*<Divbackground>*/}
        {/*<DivImage>*/}
          <Parallax
            style={{ height: `${height}` }}
            bgImage={minsk}
            strength={-100}
            blur={{ min: -4, max: 10 }}
          >
          </Parallax>
        {/*</DivImage>*/}
      {/*</Divbackground>*/}
      <Footer></Footer>
    </Container>
  );
}
