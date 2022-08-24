import React from 'react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import FormQuestion from '../../../components/formQuestion';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { ContainerInform } from '../electronicCirculationForEntity/styles';
import { Container } from '../../company/styles';
import TitleFun from "../../../components/title";
export default function ElectronicAppeal() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Электронное обращение физических лиц'} />
        <ContainerInform>
          <FormQuestion />
        </ContainerInform>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
