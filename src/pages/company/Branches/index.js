import React from 'react';
import { Container } from '../styles';
import Header from '../../../components/header';
import HeaderCompany from '../header_company';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleFun from '../../../components/title';
import Headermini from '../../../components/header/Headermini';
import useMediaQuery from '../../Home/parallax/useMediaQuery';

export default function Branches() {
  const isDesktop = useMediaQuery('(max-width: 1285px)');
  const isPhone = useMediaQuery('(min-width: 900px)');
  return (
    <Container>
      {isDesktop && isPhone ? <Headermini /> : <Header backgroundHeader={'blue'} />}

      <HeaderCompany></HeaderCompany>
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Филиалы УП "Мингаз"'}></TitleFun>
      </AdditionalDiv>
    </Container>
  );
}
