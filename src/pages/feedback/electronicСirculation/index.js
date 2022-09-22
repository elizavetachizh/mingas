import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import FormQuestion from '../../../components/formQuestion';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { ContainerInform } from '../electronicCirculationForEntity/styles';
import { Container } from '../../company/styles';
import TitleFun from '../../../components/title';
import Feedback from '../index';
import minsk from '../../../assets/background/phone.jpg';
export default function ElectronicAppeal() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <Feedback className={'none'} img={minsk} name={'Электронное обращение физических лиц'} />
      <AdditionalDiv>
        <ContainerInform>
          <FormQuestion />
        </ContainerInform>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
