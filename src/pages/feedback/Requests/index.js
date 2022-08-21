import React from 'react';
import HeaderRequests from './HeaderRequesrs';
import Header from '../../../components/header';
import HeaderFeedBack from '../HeaderFeedBack';
import { Divbackground, DivImage } from '../styles';
import minsk from '../../../assets/background/minsk.jpg';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { Container } from '../../company/styles';
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
export default function Requests() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <HeaderFeedBack />
      <Divbackground>
        <DivImage style={styled} />
      </Divbackground>
      <AdditionalDiv>
        <HeaderRequests />
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
