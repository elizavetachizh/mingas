import React from 'react';
import Header from '../../../components/header';
import { Divbackground, DivImage } from '../styles';
import minsk from '../../../assets/background/minsk.jpg';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import ReceptionSchedule from '../../../components/ReceptionSchedule';
import { Container } from '../../company/styles';
import TitleForHome from '../../../components/TitleForHome';
import HeaderFeedBack from '../HeaderFeedBack';
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
export default function ReceptionOfCitizens() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <HeaderFeedBack />
      <Divbackground>
        <DivImage style={styled} />
      </Divbackground>
      <AdditionalDiv>
        <TitleForHome infoTitle={'График приёма граждан'} color={'blue'} />
        <ReceptionSchedule />
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
