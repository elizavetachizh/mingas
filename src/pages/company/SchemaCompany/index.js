import { Container } from '../styles';
import Header from '../../../components/header';
import Feedback from '../../feedback';
import minsk from '../../../assets/background/phone.webp';
import HeaderCompany from '../header_company';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import React from 'react';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import Footer from '../../../components/footer';

export default function SchemaCompany({ name, content }) {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={name} />
      <HeaderCompany />
      <AdditionalDiv style={{ margin: '2% auto' }}>{content}</AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
