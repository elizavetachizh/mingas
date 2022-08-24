import React from 'react';
import HeaderRequests from './HeaderRequesrs';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { Container } from '../../company/styles';
export default function Requests() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <HeaderRequests />
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
