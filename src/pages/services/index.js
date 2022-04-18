import React from 'react';
import Header from '../../components/header';
import { DivTwo, DivServices, ButtonsServices, ButtonLink } from './styles';
import { data } from '../../assets/data_services';
import ServicesList from './servicesList';
import Footer from '../../components/footer';
import { Container } from '../company/styles';
import { Title } from '../Home/useful_information/styles';
import ButtonFun from '../../components/button';
import ServicesForLegalEntities from './servicesForLegalEntities';
import { Route, Routes } from 'react-router-dom';
export default function Services({ currentPage }) {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <DivTwo>
        <Title>УСЛУГИ РЕСПУБЛИКАНСКОГО УНИТАРНОГО ПРЕДПРИЯТИЯ “МИНГАЗ”</Title>
        <ButtonsServices>
          <Routes>
            <Route
              path="/services/legal-entities"
              component={<ServicesForLegalEntities></ServicesForLegalEntities>}
            ></Route>
          </Routes>
          <ButtonLink
            // currentPage={''}
            // backgroundColor={'gray'}
            // infoButton={'Для физических лиц'}
            to={'/services/legal-entities'}
          >
            Для физических лиц
          </ButtonLink>
          <ButtonFun backgroundColor={'gray'} infoButton={'Для юридических лиц'}></ButtonFun>
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
      </DivTwo>
      <Footer />
    </Container>
  );
}
