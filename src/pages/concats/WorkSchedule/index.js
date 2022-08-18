import React from 'react';
import Header from '../../../components/header';
import { AdditionalDiv } from '../GeneralContactInform/styles';
import TitleFun from '../../../components/title';
import { Row } from '../styles';
import HeaderConcats from '../headerContacts';
import Footer from '../../../components/footer';
import ReceptionSchedule from '../../../components/ReceptionSchedule';
import { Container } from '../../company/styles';

export default function SchedulePersonalReceptionOfCitizens() {
  return (
    <Container>
      <Header backgroundHeader={'blue'}></Header>
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'График приёма граждан'} />
        <Row>
          <HeaderConcats></HeaderConcats>
          <ReceptionSchedule />
        </Row>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
