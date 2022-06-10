import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from "../../../components/header";
import TitleFun from "../../../components/title";

export default function Documentation() {
  return (
    <Container>
      <Header backgroundHeader={'blue'}></Header>
      <HeaderCompany currentPage={'documentation'} />
      <TitleFun infoTitle={'Документы'} color={'blue'}></TitleFun>
    </Container>
  );
}
