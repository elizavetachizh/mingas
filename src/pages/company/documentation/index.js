import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import attesttat from '../../../assets/pdf/certificates/Аттестат_аккредитации_поверочной_лаборатории_СГЭМОиООС.pdf';
import attesttat_1 from '../../../assets/pdf/certificates/Аттестат_аккредитации_СНКИиТД.pdf';
import attestat_2 from '../../../assets/pdf/certificates/Аттестат соответствия Выполнение функций заказчика при осуществлении деятельности по возведению, реконструкции, реставрации, благоустройству объектов строительства.pdf';
import attestat_3 from '../../../assets/pdf/certificates/Аттестат соответствия на  оказание инженерных услуг_оказание инженерных услуг по комплексному управлению строит.деят.; технический надзор.pdf';
import { ContainerIframe } from './styles';
import TitleForHome from '../../../components/TitleForHome';
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
      <TitleForHome infoTitle={'Сертификаты, лицензии, свидетельства'} color={'blue'} />
      {/*<img style={styled} src={backgroundBefore}></img>*/}
      <AdditionalDiv>
        <ContainerIframe>
          <iframe src={attesttat} />
          <iframe src={attesttat_1} />
          <iframe src={attestat_2} />
          <iframe src={attestat_3}/>
        </ContainerIframe>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
