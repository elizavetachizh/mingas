import Header from '../../components/header';
import { Container, HomeContainer } from './styles';
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
export default function Home() {
  return (
    <Container>
      <Header />
      <HomeContainer>
        <ContentHome />
        <UsefulInform />
        <HomeServices />
        <ParallaxDiv />
        <HeaderRequests />
        <News />
      </HomeContainer>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
