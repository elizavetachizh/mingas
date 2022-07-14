import React, { useCallback, useEffect, useState } from 'react';
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
import axios from 'axios';

const API = 'https://smiddle.mingas.by/';
export default function Services() {
  useEffect(() => {
    // set our variable to true
    let isApiSubscribed = true;
    axios.get(API).then((response) => {
      if (isApiSubscribed) {
        // handle success
      }
    });
    return () => {
      // cancel the subscription
      isApiSubscribed = false;
    };
  }, []);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Услуги жителям столичного региона'} />
        {/*{active === 'FoIndividuals' && (*/}
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
        {/*)}*/}
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
