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
import useMediaQuery from './parallax/useMediaQuery';
import '../../web_chat/static/css/main.bbd16e91.css';
import TitleFun from '../../components/title';
// import calculate from '../../components/calculate/index.html'
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
        {/*<iframe src={calculate}></iframe>*/}
        {/*<a href={calculate}>calculate</a>*/}
      </HomeContainer>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>

      <Footer />
      <link
        type={'text/css'}
        rel={'stylesheet'}
        href="../../components/web_chat/static/css/main.bbd16e91.css"
      />

      <div id="webChat"></div>
      <span id="chatLanguage" data-language="ru"></span>
      <span id="chatFontSize" data-size="medium"></span>
      <span id="open_webchat" data-open="false"></span>

      <script src="../../src/web_chat/web_chat/config"></script>
      <script type="text/javascript" src="../../src/web_chat/static/js/main.28df611b"></script>
    </Container>
  );
}
