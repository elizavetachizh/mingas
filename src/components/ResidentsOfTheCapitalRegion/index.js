import React, { useEffect } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import up from '../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import { useNavigate } from 'react-router';
import { Container } from '../../pages/company/styles';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import { DivServices } from '../../pages/services/styles';
import { links } from '../../assets/data/linksToResidentsOfTheCapitalRegion';
import ServicesList from '../../pages/services/servicesList';
import minsk from '../../assets/background/phone.webp';
import Feedback from '../../pages/feedback';
import { BackgroundStyle } from '../../pages/Home/services/styles';
import linesOne from '../../assets/background/rig.webp';

export default function ResidentsOfTheCapitalRegion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Жителям столичного региона'} />
      <BackgroundStyle src={linesOne} />
      <AdditionalDiv>
        <DivServices>
          {links.map((element) => (
            <ServicesList
              onClick={() => navigate(element.link)}
              key={element.id}
              serviceId={element.id}
              imgCard={element.cardImg}
              nameCard={element.name}
            />
          ))}
        </DivServices>
      </AdditionalDiv>

      <ScrollToTop showUnder={160}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer classname={'service'} />
    </Container>
  );
}
