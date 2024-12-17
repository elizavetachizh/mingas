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
import { BlockContainerRequests } from '../feedback/styles';
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
        <BlockContainerRequests>
          <div
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <a href={'https://www.rec.gov.by/ru'} target={'_blank'} rel="noreferrer">
              <img
                alt={'загрузка картинки'}
                style={{
                  borderRadius: '20px',
                  margin: '0 auto',
                  boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.2)',
                }}
                src={require('../../assets/png/banner.webp')}
              />
            </a>
          </div>
        </BlockContainerRequests>

        <StateInformResources />
      </BackgroundWithImage>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'up'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
