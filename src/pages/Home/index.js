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
import StateInformResources from '../../components/stateInformResources';
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
        <StateInformResources />
        <div style={{ width: '560px', height: '800px', overflow: 'hidden', position: 'relative' }}>
          <iframe
            style={{
              width: '100%',
              height: '100%',
              border: '1px solid #e6e6e6',
              borderRadius: '8px',
              boxSizing: 'border-box',
            }}
            src="https://yandex.ru/maps-reviews-widget/41119693302?comments"
          ></iframe>
          <a
            href="https://yandex.by/maps/org/mingaz/41119693302/"
            target="_blank"
            style={{
              boxSizing: 'border-box',
              textDecoration: 'none',
              color: '#b3b3b3',
              fontSize: '10px',
              fontFamily: 'YS Text,sans-serif',
              padding: '0 20px',
              position: 'absolute',
              bottom: '8px',
              width: '100%',
              textAlign: 'center',
              left: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'block',
              maxHeight: '14px',
              whiteSpace: 'nowrap',
            }}
          >
            Мингаз на карте Минска — Яндекс Карты
          </a>
        </div>
      </HomeContainer>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
