import React from 'react';
import { Title } from '../../Home/useful_information/styles';
import Header from '../../../components/header';
import HeaderFeedBack from '../HeaderFeedBack';
import { Divbackground, DivImage } from '../styles';
import { Container } from '../../Home/styles';
import minsk from '../../../assets/background/minsk.jpg';
import Footer from '../../../components/footer';
import { Parallax } from "react-parallax";
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
export default function UsefulInformation() {
  return (
    <Container>
      <Header backgroundHeader={'blue'}/>
      <HeaderFeedBack />
      <Divbackground>
        <DivImage>
          <Parallax
            style={{ height: '470px' }}
            bgImage={minsk}
            strength={-100}
          >
          </Parallax>
        </DivImage>
      </Divbackground>
      <Title>Useful information</Title>
      <Footer></Footer>
    </Container>
  );
}
