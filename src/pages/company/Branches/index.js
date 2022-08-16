import React from 'react';
import { Container } from '../styles';
import Header from '../../../components/header';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import HeaderBranches from './Header';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import Footer from '../../../components/footer';

export default function Branches() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      {/*<HeaderCompany />*/}
      <AdditionalDiv>
        <HeaderBranches />
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
