import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import TitleFun from '../../../components/title';
import Footer from '../../../components/footer';

export default function Gratitude() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'gratitude'} />
      <TitleFun infoTitle={'Благодарности и награды'} color={'blue'}></TitleFun>
      <Footer />
    </Container>
  );
}
