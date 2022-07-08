import React from 'react';
import minsk from '../../../assets/background/minsk.jpg';
import Header from '../../../components/header';
import HeaderFeedBack from '../HeaderFeedBack';
import { Divbackground, DivImage } from '../styles';
import { Container } from '../../Home/styles';
import Footer from '../../../components/footer';
import FormQuestionForEntity from "../../../components/FormQuestionForEntity";
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
export default function ElectronicAppealForEntity() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      {/*<HeaderFeedBack />*/}
      <Divbackground>
        <DivImage style={styled}></DivImage>
      </Divbackground>
      <FormQuestionForEntity/>
      <Footer />
    </Container>
  );
}
