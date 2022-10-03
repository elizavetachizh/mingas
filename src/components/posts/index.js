import { Container } from '../../pages/company/styles';
import Header from '../header';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import Feedback from '../../pages/feedback';
import minsk from '../../assets/background/phone.webp';
import React, { useEffect } from 'react';
import DopFunctional from './DopFunctional';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';

export default function Posts() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Header />
      <Feedback
        className={'none'}
        img={minsk}
        name={'УП «МИНГАЗ» просит своих абонентов быть бдительными'}
      />
      <AdditionalDiv>
        <DopFunctional />
      </AdditionalDiv>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
