import Header from '../header';
import Feedback from '../../pages/feedback';
import minsk from '../../assets/background/phone.webp';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';
import Footer from '../footer';
import React  from 'react';
import { Container } from '../../pages/company/styles';

export default function ContainerContent({ name, content }) {

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={name} />
      <AdditionalDiv>{content}</AdditionalDiv>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
