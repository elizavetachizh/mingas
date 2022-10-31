import Header from '../header';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import Footer from '../footer';
import HeaderAdministrativeServices from './Header';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';
import React, { useEffect } from 'react';
import { Container } from '../../pages/company/styles';
import Feedback from '../../pages/feedback';
import minsk from '../../assets/background/background_new.webp';
export default function AdministrativeServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Административные услуги'} />
      <AdditionalDiv>
        <HeaderAdministrativeServices />
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={'вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
