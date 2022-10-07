import React from 'react';
import { Links } from './styles';
import ContainerContent from '../../components/Container';
import price from '../../assets/pdf/price/1.pdf';
import price_2 from '../../assets/pdf/price/2.pdf';
export default function ResidentsOfCapitalRegion() {
  return (
    <ContainerContent
      name={'Прейскурант цен'}
      content={
        <Links>
          <a target={'_blank'} rel="opener" href={price}>
            Скачать “Прейскурант №1-ИМ: Цены на газосипользующее оборудование, материалы,
            комплектующие”{' '}
          </a>
          <a target={'_blank'} rel="noopener" href={price_2}>
            Скачать “Прейскурант №1: Тарифы на работы(услуги) оказываемые населению”
          </a>
          <a target={'_blank'} rel="opener" href={require('../../assets/pdf/price/3.pdf')}>
            Скачать “Прейскурант №9: Тарифы на работы по техническому обслуживанию газопроводов и
            газоиспользующего оборудования”
          </a>
          <a target={'_blank'} rel="noopener" href={require('../../assets/pdf/price/4.pdf')}>
            Скачать “Прейскурант №11: на работы по установке приборов индивидуального учета расхода
            газа в существующем жилом фонде (газифицированные жилые дома)”{' '}
          </a>
        </Links>
      }
    />
  );
}
