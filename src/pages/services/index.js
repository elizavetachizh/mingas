import React, { useState } from "react";
import Header from '../../components/header';
import { InformServices, DivServices, ButtonsServices, ButtonLink } from './styles';
import { data } from '../../assets/data_services';
import ServicesList from './servicesList';
import Footer from '../../components/footer';
import { Container } from '../company/styles';
import { Title } from '../Home/useful_information/styles';
import ServicesForLegalEntities from './servicesForLegalEntities';
import { Route, Routes } from 'react-router-dom';
import up from '../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import { Button } from "../feedback/styles";
import ApplicationForVerificationOfGasMeters from "../feedback/Requests/ApplicationForVerificationOfGasMeters";
import ApplicationForOrderingCylinders from "../feedback/Requests/ApplicationForOrderingCylinders";
export default function Services() {
  const [active, setActive] = useState('FoIndividuals');
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <InformServices>
        <Title>УСЛУГИ РЕСПУБЛИКАНСКОГО УНИТАРНОГО ПРЕДПРИЯТИЯ “МИНГАЗ”</Title>
        <ButtonsServices>
          <Button
            onClick={() => {
              setActive('FoIndividuals');
            }}
          >
            Для физических лиц
          </Button>
          <Button
            onClick={() => {
              setActive('ApplicationForVerificationOfGasMeters');
            }}
          >
            Для юридических лиц
          </Button>
          {/*<ButtonLink to={'/services/legal-entities'}>Для физических лиц</ButtonLink>*/}
          {/*<ButtonLink to={'/services/legal-entities'}>Для юридических лиц</ButtonLink>*/}
        </ButtonsServices>
        {active === 'FoIndividuals' && (
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
        )}
        {active === 'ApplicationForOrderingCylinders' && <ApplicationForOrderingCylinders />}

      </InformServices>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
