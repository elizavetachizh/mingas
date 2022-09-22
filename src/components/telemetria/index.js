import { Container } from '../../pages/company/styles';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import FormTelemetria from './form';
import Header from '../header';
import Feedback from '../../pages/feedback';
import minsk from '../../assets/background/phone.jpg';
import React from 'react';

export default function Telemetria() {
  return (
    <Container>
      <Header />
      <Feedback className={'none'} img={minsk} name={'Телеметрия'} />
      <AdditionalDiv>
        <p>Информация</p>
        <FormTelemetria />
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
