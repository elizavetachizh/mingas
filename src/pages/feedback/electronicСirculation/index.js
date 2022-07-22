import React from 'react';
import minsk from '../../../assets/background/minsk.jpg';
import Header from '../../../components/header';
import HeaderFeedBack from '../HeaderFeedBack';
import { Divbackground, DivImage } from '../styles';
import { Container } from '../../Home/styles';
import Footer from '../../../components/footer';
import FormQuestion from '../../../components/formQuestion';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleForHome from '../../../components/TitleForHome';
import { ContainerInform } from '../electronicCirculationForEntity/styles';
const styled = {
  background: `url(${minsk}) no-repeat`,
  backgroundSize: 'cover',
};
export default function ElectronicAppeal() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderFeedBack />
      <Divbackground>
        <DivImage style={styled}></DivImage>
      </Divbackground>
      <AdditionalDiv>
        <TitleForHome color={'blue'} infoTitle={'Электронное обращение физических лиц'} />
        <ContainerInform>
          <FormQuestion />
        </ContainerInform>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
