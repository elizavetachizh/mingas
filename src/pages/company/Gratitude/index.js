import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import TitleFun from '../../../components/title';
import Footer from '../../../components/footer';
import TitleForHome from '../../../components/TitleForHome';
import { AdditionalDiv } from "../../concats/GeneralContactInform/styles";
import SubTitleFun from "../../../components/SubTitle";
import { ContainerIframe } from "../documentation/styles";
import gratitude from '../../../assets/pdf/gratitude/eee.pdf'
import gratitude_1 from '../../../assets/pdf/gratitude/rrr.pdf'
import gratitude_2 from '../../../assets/pdf/gratitude/Scan20220708132344.pdf'
import gratitude_3 from '../../../assets/pdf/gratitude/Scan20220708132759.pdf'
import gratitude_4 from '../../../assets/pdf/gratitude/Scan20220708133203.pdf'
import gratitude_5 from '../../../assets/pdf/gratitude/Scan20220708133438.pdf'
import gratitude_6 from '../../../assets/pdf/gratitude/Scan20220708133638.pdf'
import gratitude_7 from '../../../assets/pdf/gratitude/Scan20220708133803.pdf'
export default function Gratitude() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'gratitude'} />
      <TitleForHome infoTitle={'Благодарности и награды'} color={'blue'}></TitleForHome>
      <AdditionalDiv>
        {/*<SubTitleFun color={'blue'} infoSubTitle={'Аттестаты'} />*/}
        <ContainerIframe>
          <iframe src={gratitude} />
          <iframe src={gratitude_1} />
          <iframe src={gratitude_2} />
          <iframe src={gratitude_3} />
          <iframe src={gratitude_4} />
          <iframe src={gratitude_5} />
          <iframe src={gratitude_6} />
          <iframe src={gratitude_7} />
        </ContainerIframe>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
