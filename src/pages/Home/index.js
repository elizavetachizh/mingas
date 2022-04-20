import React from 'react';
import Header from '../../components/header';
import { Container, HomeContainer } from './styles';
import ContentHome from './Content';
import UsefulInform from './useful_information';
import HomeServices from './services';
import ParallaxDiv from './parallax';
import News from './News';
import Footer from '../../components/footer';
import FormQuestion from '../../components/formQuestion';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';
export default function Home() {
  return (
    <Container>
      <Header />
      <HomeContainer>
        <ContentHome />
        <UsefulInform />
        <HomeServices />
        <ParallaxDiv />
        <FormQuestion />
        <News />
      </HomeContainer>
      <ScrollToTop showUnder={160}>
        <img src={up} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
