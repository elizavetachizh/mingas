import React from 'react';
import { Container } from '../styles';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { Title } from '../Home/useful_information/styles';
export default function PressCenter() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Title>Пресс-центр</Title>
      <Footer />
    </Container>
  );
}
