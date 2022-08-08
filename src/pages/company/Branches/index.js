import React from 'react';
import { Container } from '../styles';
import Header from '../../../components/header';
import HeaderCompany from '../header_company';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleForHome from '../../../components/TitleForHome';
import Ogonek from './Ogonek';

export default function Branches() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <HeaderCompany></HeaderCompany>
      <AdditionalDiv>
        <TitleForHome margin={'s'} color={'blue'} infoTitle={'Филиалы УП "Мингаз"'} />
        <Ogonek />
      </AdditionalDiv>
    </Container>
  );
}
