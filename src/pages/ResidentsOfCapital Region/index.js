import React, { useEffect } from 'react';
import Header from '../../components/header';
import { AdditionalDiv } from '../concats/GeneralContactInform/styles';
import Footer from '../../components/footer';
import price_1 from '../../assets/pdf/Prejskurant-1-s-01.01.2022.pdf';
import price_2 from '../../assets/pdf/Prejskurant-9-s-23.03.2022.pdf';
import price_3 from '../../assets/pdf/Prejskurant-11-s-15.09.2022.pdf';
import price_4 from '../../assets/pdf/Prejeskurant-1-IM-12.07.2022.pdf';
import { Links } from './styles';
import { Container } from '../company/styles';
import Feedback from '../feedback';
import minsk from '../../assets/background/phone.jpg';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';
export default function ResidentsOfCapitalRegion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Прейскурант цен'} />
      <AdditionalDiv>
        <Links>
          <a target={'_blank'} href={price_4}>
            Скачать “Прейскурант №1-ИМ: Цены на газосипользующее оборудование, материалы,
            комплектующие”{' '}
          </a>
          <a target={'_blank'} href={price_1}>
            Скачать “Прейскурант №1: Тарифы на работы(услуги) оказываемые населению”
          </a>
          <a target={'_blank'} href={price_2}>
            Скачать “Прейскурант №9: Тарифы на работы по техническому обслуживанию газопроводов и
            газоиспользующего оборудования”
          </a>
          <a target={'_blank'} href={price_3}>
            Скачать “Прейскурант №11: на работы по установке приборов индивидуального учета расхода
            газа в существующем жилом фонде (газифицированные жилые дома)”{' '}
          </a>
        </Links>
      </AdditionalDiv>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
