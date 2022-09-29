import React, { useEffect } from 'react';
import Header from '../../components/header';
import { AdditionalDiv } from '../concats/GeneralContactInform/styles';
import Footer from '../../components/footer';
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
          <a target={'_blank'} href={require('../../assets/pdf/price/1.pdf')}>
            Скачать “Прейскурант №1-ИМ: Цены на газосипользующее оборудование, материалы,
            комплектующие”{' '}
          </a>
          <a target={'_blank'} href={require('../../assets/pdf/price/2.pdf')}>
            Скачать “Прейскурант №1: Тарифы на работы(услуги) оказываемые населению”
          </a>
          <a target={'_blank'} href={require('../../assets/pdf/price/3.pdf')}>
            Скачать “Прейскурант №9: Тарифы на работы по техническому обслуживанию газопроводов и
            газоиспользующего оборудования”
          </a>
          <a target={'_blank'} href={require('../../assets/pdf/price/4.pdf')}>
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
