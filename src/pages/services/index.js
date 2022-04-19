import React from 'react';
import Header from '../../components/header';
import { InformServices, DivServices, ButtonsServices, ButtonLink } from './styles';
import { data } from '../../assets/data_services';
import ServicesList from './servicesList';
import Footer from '../../components/footer';
import { Container } from '../company/styles';
import { Title } from '../Home/useful_information/styles';
import ServicesForLegalEntities from './servicesForLegalEntities';
import { Route, Routes } from 'react-router-dom';
export default function Services() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <InformServices>
        <Title>УСЛУГИ РЕСПУБЛИКАНСКОГО УНИТАРНОГО ПРЕДПРИЯТИЯ “МИНГАЗ”</Title>
        <ButtonsServices>
          <Routes>
            <Route
              path="/legal-entities"
              component={<ServicesForLegalEntities></ServicesForLegalEntities>}
            ></Route>
          </Routes>
          <ButtonLink to={'/services/legal-entities'}>Для физических лиц</ButtonLink>
          <ButtonLink to={'/services/legal-entities'}>Для юридических лиц</ButtonLink>
        </ButtonsServices>
        <DivServices>
          {data.map((element) => (
            <ServicesList
              imgCard={element.cardImg}
              nameCard={element.nameCard}
              descName={element.cardDesc}
              button={element.buttonCard}
            />
          ))}
        </DivServices>
      </InformServices>
      <Footer />
    </Container>
  );
}
