import Header from '../header';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import Footer from '../footer';
import HeaderAdministrativeServices from './Header';
import { Container } from '../../pages/styles';
import InformationAdministrativeService from './InformaationAdministrativeService';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';
import React from 'react';
export default function AdministrativeServices() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <HeaderAdministrativeServices />
        {/*<InformationAdministrativeService />*/}
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
