import React from 'react';
import { Container } from '../Home/styles';
import Header from '../../components/header';
import minsk from '../../assets/background/minsk.jpg';
import HeaderFeedBack from './HeaderFeedBack';
import { Divbackground, DivImage } from './styles';
import Footer from '../../components/footer';
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
export default function Feedback() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <HeaderFeedBack />
      <Divbackground>
        <DivImage style={styled}></DivImage>
      </Divbackground>
      <Footer></Footer>
    </Container>
  );
}
