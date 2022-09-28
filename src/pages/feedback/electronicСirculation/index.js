import React, { useEffect } from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import FormQuestion from '../../../components/formQuestion';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { ContainerInform } from '../electronicCirculationForEntity/styles';
import { Container } from '../../company/styles';
import Feedback from '../index';
import minsk from '../../../assets/background/phone.jpg';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
export default function ElectronicAppeal() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <Feedback className={'none'} img={minsk} name={'Электронное обращение физических лиц'} />
      <AdditionalDiv>
        <ContainerInform>
          <FormQuestion />
        </ContainerInform>
      </AdditionalDiv>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
