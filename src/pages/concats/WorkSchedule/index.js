import React from 'react';
import Header from '../../../components/header';
import { AdditionalDiv } from '../GeneralContactInform/styles';
import TitleFun from '../../../components/title';
import { Row } from '../styles';
import HeaderConcats from '../headerContacts';
import Footer from '../../../components/footer';
import ReceptionSchedule from '../../../components/ReceptionSchedule';
import { Container } from '../../company/styles';
import Feedback from "../../feedback";
import minsk from "../../../assets/background/phone.jpg";

export default function SchedulePersonalReceptionOfCitizens() {
  return (
    <Container>
      <Header backgroundHeader={'blue'}/>
        <Feedback className={'none'} img={minsk} name={'График приёма граждан'} />
      <AdditionalDiv>
        <Row>
          <HeaderConcats />
          <ReceptionSchedule />
        </Row>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
