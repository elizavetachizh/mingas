import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';

export default function Structure() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'Structure'} />
      <Footer />
    </Container>
  );
}
