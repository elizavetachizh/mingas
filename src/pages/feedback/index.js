import React, { useState } from 'react';
import { Container } from '../Home/styles';
import Header from '../../components/header';
import ReceptionOfCitizens from './receptionOfCitizens';
import minsk from '../../assets/background/minsk.jpg';
import gas from '../../assets/background/mingas_background(1).jpg';
import HeaderFeedBack from './HeaderFeedBack';
import { Divbackground, DivImage, Mingas, Minsk } from './styles';
import Footer from '../../components/footer';
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
const styledGas = {
  background: `url(${gas})  no-repeat`,
};
export default function Feedback() {
  const [active, setActive] = useState('ReceptionOfCitizens');
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
