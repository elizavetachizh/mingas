import Header from '../../components/header';
import { Container } from './styles';
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
export default function Home() {
  return (
    <Container>
      <Header backgroundHeader={'gray'} />
      <>
        <ContentHome />
        <UsefulInform />
        <HeaderRequests />
        <ParallaxDiv />
        <HomeServices />
        <News />
        <StateInformResources />
      </>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
