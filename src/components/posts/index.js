import { Container } from '../../pages/company/styles';
import Header from '../header';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import Feedback from '../../pages/feedback';
import minsk from '../../assets/background/phone.jpg';
import React from 'react';
import DopFunctional from './DopFunctional';

export default function Posts() {
  return (
    <Container>
      <Header />
      <Feedback className={'none'} img={minsk} name={'Лжегазовики'} />
      <AdditionalDiv>
        <DopFunctional />
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
