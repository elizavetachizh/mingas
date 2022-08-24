import React from 'react';
import Header from '../../components/header';
import { AdditionalDiv } from '../concats/GeneralContactInform/styles';
import Footer from '../../components/footer'
import price_1 from '../../assets/pdf/Prejskurant-1-s-01.01.2022.pdf';
import price_2 from '../../assets/pdf/Prejskurant-9-s-23.03.2022.pdf';
import price_3 from '../../assets/pdf/Prejskurant-11-s-04.10.2019-szhatyj.pdf';
import { Links } from './styles';
import TitleFun from '../../components/title';
import {Container} from "../company/styles";
export default function ResidentsOfCapitalRegion() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Прейскуранты цен'} />
        <Links>
          <a href={price_1} download>
            Скачать “Прейскурант №1: Тарифы на работы(услуги) оказываемые населению”
          </a>
          <a download href={price_2}>
            Скачать “Прейскурант №9: Тарифы на работы по техническому обслуживанию газопроводов и
            газоиспользующего оборудования”
          </a>
          <a download href={price_3}>
            Скачать “Прейскурант №11: на работы по установке приборов индивидуального учета расхода
            газа в существующем жилом фонде (газифицированные жилые дома)”{' '}
          </a>
        </Links>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
