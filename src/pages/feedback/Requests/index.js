import React from 'react';
import HeaderRequests from './HeaderRequesrs';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { Container } from '../../company/styles';
import Feedback from '../index';
import minsk from '../../../assets/background/phone.jpg';
export default function Requests() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Оставить онлайн-заявку'} />
      <AdditionalDiv>
        <HeaderRequests style={{ backgroundColor: 'white' }} />
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
