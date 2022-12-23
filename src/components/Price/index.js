import React from 'react';
import { Links } from './styles';
import ContainerContent from '../Container';
export default function ResidentsOfCapitalRegion() {
  return (
    <ContainerContent
      name={'Прейскурант цен'}
      content={
        <Links>
          <a target={'_blank'} rel="opener" href={require('../../assets/pdf/price/one.pdf')}>
            Скачать “Прейскурант №1-ИМ: Цены на газосипользующее оборудование, материалы,
            комплектующие”{' '}
          </a>
          <a target={'_blank'} rel="opener" href={require('../../assets/pdf/price/two.pdf')}>
            Скачать “Прейскурант №1: Тарифы на работы(услуги) оказываемые населению”
          </a>
          <div>
            <a target={'_blank'} rel="opener" href={require('../../assets/pdf/price/seven.pdf')}>
              Скачать “Прейскурант №7: Тарифы на работы по ведению технического надзора за
              строительством систем газоснабжения и приемке объектов в эксплуатацию”
            </a>
            <a download href={require('../../assets/wordFile/dogovor_opertsionni_control.doc')}>
              Договор операционный контроль
            </a>
          </div>
          <a target={'_blank'} rel="opener" href={require('../../assets/pdf/price/new.pdf')}>
            Скачать “Прейскурант №2: Тарифы на работы (услуги), оказываемые предприятиям и
            организациям”
          </a>
          <a target={'_blank'} rel="opener" href={require('../../assets/pdf/price/three.pdf')}>
            Скачать “Прейскурант №9: Тарифы на работы по техническому обслуживанию газопроводов и
            газоиспользующего оборудования”
          </a>
          <a target={'_blank'} rel="opener" href={require('../../assets/pdf/price/four.pdf')}>
            Скачать “Прейскурант №11: на работы по установке приборов индивидуального учета расхода
            газа в существующем жилом фонде (газифицированные жилые дома)”{' '}
          </a>
        </Links>
      }
    />
  );
}
