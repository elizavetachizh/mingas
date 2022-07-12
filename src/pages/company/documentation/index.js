import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import TitleFun from '../../../components/title';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';

const styled = {
  width: '100%',
  zIndex: '10',
  height: '100%',
  backgroundImage: `url(${require('../../../assets/background/background.png')})`,
};

export default function Documentation() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'documentation'} />
      <TitleFun infoTitle={'Сертификаты, лицензии, свидетельства'} color={'blue'} />
      {/*<img style={styled} src={backgroundBefore}></img>*/}
      <AdditionalDiv style={styled}><p>gvjhbglhnil</p></AdditionalDiv>
        <input type={'file'}/>
      <Footer />
    </Container>
  );
}
