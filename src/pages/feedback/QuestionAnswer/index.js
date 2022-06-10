import React from 'react';
import { Container } from '../../styles';
import Header from '../../../components/header';
import { Title } from '../../Home/useful_information/styles';
import HeaderFeedBack from '../HeaderFeedBack';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { Divbackground, DivImage } from '../styles';
import minsk from '../../../assets/background/minsk.jpg';
const styled = {
  background: `url(${minsk})  no-repeat`,
  backgroundSize: 'cover',
};
export default function QuestionAnswer() {
  return (
    <Container>
      <Header backgroundHeader={'blue'}></Header>
      <HeaderFeedBack />
      <Divbackground>
        <DivImage style={styled}></DivImage>
      </Divbackground>
      <AdditionalDiv>
        <Title>Question answer</Title>
      </AdditionalDiv>
      <Footer></Footer>
    </Container>
  );
}
