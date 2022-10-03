import React, { useEffect } from 'react';
import Header from '../../../components/header';
import { AdditionalDiv } from '../GeneralContactInform/styles';
import { Row } from '../styles';
import HeaderConcats from '../headerContacts';
import Footer from '../../../components/footer';
import ReceptionSchedule from '../../../components/ReceptionSchedule';
import { Container } from '../../company/styles';
import Feedback from '../../feedback';
import minsk from '../../../assets/background/phone.webp';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';

export default function SchedulePersonalReceptionOfCitizens() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'График приёма граждан'} />
      <AdditionalDiv>
        <Row>
          <HeaderConcats />
          <ReceptionSchedule />
        </Row>
      </AdditionalDiv>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
