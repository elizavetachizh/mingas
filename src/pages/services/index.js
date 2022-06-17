import React, { useCallback, useState } from 'react';
import Header from '../../components/header';
import { InformServices, DivServices, ButtonsServices, ButtonLink } from './styles';
import { data } from '../../assets/data_services';
import ServicesList from './servicesList';
import Footer from '../../components/footer';
import { Container } from '../company/styles';
import { Title } from '../Home/useful_information/styles';
import up from '../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import ApplicationForOrderingCylinders from '../feedback/Requests/ApplicationForOrderingCylinders';
import TitleFun from "../../components/title";
export default function Services() {
  const [active, setActive] = useState('FoIndividuals');

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <InformServices>
        {/*<Title>Услуги жителям столичного региона</Title>*/}
        <TitleFun color={'blue'} infoTitle={'Услуги жителям столичного региона'}/>
        {/*<ButtonsServices>*/}
        {/*  <Button*/}
        {/*    onClick={() => {*/}
        {/*      setActive('FoIndividuals');*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Для физических лиц*/}
        {/*  </Button>*/}
        {/*  <Button*/}
        {/*    onClick={() => {*/}
        {/*      setActive('ApplicationForVerificationOfGasMeters');*/}
        {/*    }}*/}
        {/*  >*/}
        {/*    Для юридических лиц*/}
        {/*  </Button>*/}
        {/*  /!*<ButtonLink to={'/services/legal-entities'}>Для физических лиц</ButtonLink>*!/*/}
        {/*  /!*<ButtonLink to={'/services/legal-entities'}>Для юридических лиц</ButtonLink>*!/*/}
        {/*</ButtonsServices>*/}
        {active === 'FoIndividuals' && (
          <DivServices>
            {data.map((element) => (
              <ServicesList serviceId={element.serviceId} imgCard={element.cardImg} nameCard={element.nameCard} description={element.description}  />
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
