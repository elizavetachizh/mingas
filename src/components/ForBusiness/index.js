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
import { links } from '../../assets/data/linksForBusines';
import ServicesList from '../../pages/services/servicesList';

export default function ForBusiness() {
  const navigate = useNavigate();
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Для бизнеса'} />
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
