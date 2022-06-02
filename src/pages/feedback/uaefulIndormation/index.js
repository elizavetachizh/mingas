import React from 'react';
import { Title } from '../../Home/useful_information/styles';
import Header from '../../../components/header';
import HeaderFeedBack from '../HeaderFeedBack';
import { Divbackground, DivImage } from '../styles';
import { Container } from '../../Home/styles';
import minsk from '../../../assets/background/minsk.jpg';
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
export default function UsefulInformation() {
  return (
    <Container>
      <Header></Header>
      <HeaderFeedBack />
      <Divbackground>
        <DivImage style={styled}></DivImage>
      </Divbackground>
      <Title>Useful information</Title>
    </Container>
  );
}
