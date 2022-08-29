import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import ReceptionSchedule from '../../../components/ReceptionSchedule';
import { Container } from '../../company/styles';
import TitleFun from '../../../components/title';

export default function ReceptionOfCitizens() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun infoTitle={'График приёма граждан'} color={'blue'} />
        <ReceptionSchedule />
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
