import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import TitleFun from '../../../components/title';
import Footer from '../../../components/footer';

export default function Documentation() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'documentation'} />
      <TitleFun infoTitle={'Сертификаты, лицензии, свидетельства'} color={'blue'}></TitleFun>
      <Footer />
    </Container>
  );
}
