import React from 'react';
import Header from '../../components/header';
import { DivServices } from './styles';
import { data } from '../../assets/data_services';
import ServicesList from './servicesList';
import Footer from '../../components/footer';
import { Container } from '../company/styles';
import up from '../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import TitleFun from '../../components/title';
import { AdditionalDiv } from '../concats/GeneralContactInform/styles';

export default function Services() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Услуги жителям столичного региона'} />
        <DivServices>
          {data.map((element) => (
            <ServicesList
              key={element.nameCard}
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
