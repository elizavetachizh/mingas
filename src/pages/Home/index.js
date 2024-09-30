import Header from '../../components/header';
import React from 'react';
import ContentHome from './Content';
import UsefulInform from './useful_information';
import HomeServices from './services';
import ParallaxDiv from './parallax';
import News from './News';
import Footer from '../../components/footer';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';
import HeaderRequests from '../feedback/Requests/HeaderRequesrs';
import StateInformResources from '../../components/stateInformResources';
import linesOne from '../../assets/background/test2.png';
import { Container } from '../company/styles';
import './slider/styles.css';
import ModalWindowAIS from '../../components/ModalWindowAIS';
import { BackgroundWithImage } from './styles';
export default function Home() {
  return (
    <Container>
      <Header />
      <ModalWindowAIS />
      <BackgroundWithImage bgImage={linesOne}>
        <ContentHome />
        <UsefulInform />
        <HeaderRequests />
        <ParallaxDiv />
        <HomeServices />
        <News />
        <StateInformResources />
      </BackgroundWithImage>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'up'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
