import Header from '../../components/header';
import React, { useEffect, useState } from 'react';
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
import { BackgroundStyle } from './services/styles';
import linesOne from '../../assets/background/rig.png';
import { Container } from '../company/styles';
export default function Home() {
  const [apiResponse, setApiResponse] = useState();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState('');
  useEffect(() => {
    window.scrollTo(0, 0);
    fetch('http://localhost:9000/')
      .then((res) => res.text())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  return (
    <>
      <p style={{display:"none"}}>{items}</p>
      <Container>
        <Header />
        <>
          <ContentHome />
          <UsefulInform />
          <BackgroundStyle src={linesOne} />
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
    </>
  );
}
