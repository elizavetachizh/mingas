import React from 'react';
import ChangeFormQuestion from '../../../components/formQuestion/changeFormQuestion';
import minsk from '../../../assets/background/minsk.jpg';
import Header from '../../../components/header';
import HeaderFeedBack from '../HeaderFeedBack';
import { Divbackground, DivImage } from '../styles';
import { Container } from '../../Home/styles';
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
export default function ElectronicAppeal() {
  return (
    <Container>
      <Header></Header>
      <HeaderFeedBack />
      <Divbackground>
        <DivImage style={styled}></DivImage>
      </Divbackground>
      <ChangeFormQuestion />
    </Container>
  );
}
