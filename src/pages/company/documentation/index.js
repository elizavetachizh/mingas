import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import TitleFun from '../../../components/title';
import useMediaQuery from '../../Home/parallax/useMediaQuery';
import Headermini from '../../../components/header/Headermini';

export default function Documentation() {
  const isDesktop = useMediaQuery('(max-width: 1285px)');
  const isPhone = useMediaQuery('(min-width: 900px)');
  return (
    <Container>
      {isDesktop && isPhone ? <Headermini /> : <Header backgroundHeader="blue" />}
      <HeaderCompany currentPage={'documentation'} />
      <TitleFun infoTitle={'Документы'} color={'blue'}></TitleFun>
    </Container>
  );
}
