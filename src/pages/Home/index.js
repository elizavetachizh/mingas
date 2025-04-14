import Header from '../../components/header';
import React, { useEffect } from 'react';
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
import { BlockContainerRequests } from '../feedback/styles';
import UsefulResourcesHome from './usefulResources';
export default function Home() {
  useEffect(() => {
    // Создаем элемент script
    const script = document.createElement('script');
    script.src = 'https://pogoda.by/assets/static/widget/widget.js';
    script.defer = true;
    document.body.appendChild(script);

    // Удаляем скрипт при размонтировании компонента
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Container>
      <Header />
      <ModalWindowAIS />
      <BackgroundWithImage bgImage={linesOne}>
        <ContentHome />
        <UsefulInform />
        <BlockContainerRequests
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/*<div style={{ width: '30%' }}>*/}
          {/*  <p></p>*/}
          {/*</div>*/}
          <HeaderRequests />
          <div
            id="widget__pogoda"
            data-city_id="26851"
            style={{ minWidth: '100px', maxWidth: '350px', marginRight: '2rem' }}
            aria-label="Прогноз погоды"
          />
        </BlockContainerRequests>
        <ParallaxDiv />
        <HomeServices />
        <News />
        <UsefulResourcesHome />
        <StateInformResources />
      </BackgroundWithImage>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'up'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
