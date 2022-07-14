import React from 'react';
import minsk from '../../../assets/background/minsk.jpg';
import Header from '../../../components/header';
import { Divbackground, DivImage } from '../styles';
import { Container } from '../../Home/styles';
import Footer from '../../../components/footer';
import FormQuestionForEntity from '../../../components/FormQuestionForEntity';
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
export default function ElectronicAppealForEntity() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <Divbackground>
        <DivImage style={styled}></DivImage>
      </Divbackground>
      <FormQuestionForEntity />
      <Footer />
    </Container>
  );
}
