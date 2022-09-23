import { Container } from '../../pages/company/styles';
import Footer from '../footer';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import FormTelemetria from './form';
import Header from '../header';
import Feedback from '../../pages/feedback';
import minsk from '../../assets/background/phone.jpg';
import React from 'react';

export default function Telemetria() {
  return (
    <Container>
      <Header />
      <Feedback className={'none'} img={minsk} name={'Телеметрия'} />
      <AdditionalDiv>
        <a target="_blank" rel="noopener noreferrer" href={'http://178.124.164.50:82/'}>
          Доступ к информации о параметрах расхода газа
        </a>
        <p>
          Для просмотра информации о параметрах расхода газа, выведенных по системе телеметрии с
          узла учета газа, вы можете подать заявку на предоставление персонального логина и пароля:
        </p>
        <FormTelemetria />
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
