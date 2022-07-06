import React from 'react';
import { Container } from '../../Home/styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleFun from '../../../components/title';
import { DivServices } from '../styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import { dataLegalEntities } from '../../../assets/data_service_legalEntities_general';
import ServicesList from './serviceList';

export default function ServicesForLegalEntities() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Услуги для бизнеса'} />
        <DivServices>
          {dataLegalEntities.map((element) => (
            <ServicesList
              serviceId={element.serviceId}
              imgCard={element.cardImg}
              nameCard={element.nameCard}
              description={element.description}
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
