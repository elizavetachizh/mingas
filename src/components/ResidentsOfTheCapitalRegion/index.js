import React, { useCallback } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import up from '../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import TitleFun from '../../components/title';
import { useNavigate } from 'react-router';
import { Container } from '../../pages/company/styles';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import { DivServices } from '../../pages/services/styles';
import { links } from '../../assets/data/linksToResidentsOfTheCapitalRegion';
import ServicesList from '../../pages/services/servicesList';

export default function ResidentsOfTheCapitalRegion() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Жителям столичного региона'} />
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
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
