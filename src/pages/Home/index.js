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
import Headermini from '../../components/header/Headermini';
// import htmlContent from '../../index.html';
export default function Home() {
  const isDesktop = useMediaQuery('(max-width: 1285px)');
  const isPhone = useMediaQuery('(min-width: 900px)');
  return (
    <Container>
     <Header />
      <HomeContainer>
        <ContentHome />
        <UsefulInform />
        <HomeServices />
        <ParallaxDiv />
        {/*<ChangeFormQuestion />*/}
        <HeaderRequests />
        {/*<Appeal />*/}
        <News />
      </HomeContainer>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      {/*<include src={htmlContent}></include>*/}
      {/*<link rel="stylesheet" href="../../web_chat/static/css/main.bbd16e91.css"></link>*/}
      {/*  <div id="webChat"></div>*/}
      {/*  <span id="chatLanguage" data-language="ru"></span>*/}
      {/*  <span id="chatFontSize" data-size="medium"></span>*/}
      {/*  <span id="open_webchat" data-open="false"></span>*/}

      {/*  <script src="../../web_chat/config"></script>*/}
      {/*  <script type="text/javascript" src="../../web_chat/static/js/main.28df611b.js"></script>*/}
      <Footer />
    </Container>
  );
}
