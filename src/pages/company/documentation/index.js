import React from 'react';
import { Container, ContainerGraditude } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleForHome from '../../../components/TitleForHome';
import '@brainhubeu/react-carousel/lib/style.css';
import AttestatsFunction from './attestats';
import CertificatsFunction from './certifications';
import LitsenziiFunction from './litsenzii';
import LitsenziiTwoFunction from './litsenziiTwo';

export default function Documentation() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'documentation'} />
      <TitleForHome infoTitle={'Сертификаты, лицензии, свидетельства'} color={'blue'} />
      <AdditionalDiv>
        <ContainerGraditude>
          <AttestatsFunction />
        </ContainerGraditude>
        <ContainerGraditude>
          <CertificatsFunction />
        </ContainerGraditude>
        <ContainerGraditude>
          <LitsenziiFunction />
        </ContainerGraditude>
        <ContainerGraditude>
          <LitsenziiTwoFunction />
        </ContainerGraditude>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
