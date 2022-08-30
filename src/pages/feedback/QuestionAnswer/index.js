import React from 'react';
import Header from '../../../components/header';
import HeaderFeedBack from '../HeaderFeedBack';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { Divbackground, DivImage } from '../styles';
import minsk from '../../../assets/background/minsk.jpg';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import Menu from './Menu';
import { Container } from '../../company/styles';
const styled = {
  background: `url(${minsk}) no-repeat`,
  backgroundSize: 'cover',
};
export default function QuestionAnswer() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <HeaderFeedBack />
      <Divbackground>
        <DivImage style={styled} />
      </Divbackground>
      <AdditionalDiv>
        <Menu />
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
