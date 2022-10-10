import React from 'react';
import { Links } from './styles';
import ContainerContent from '../../components/Container';
import price from '../../assets/pdf/price/one.pdf';
import price_2 from '../../assets/pdf/price/two.pdf';
export default function ResidentsOfCapitalRegion() {
  const onButtonClick = () => {
    fetch(price).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'price';
        alink.click();
      });
    });
  };
  const onButtonClickPRice = () => {
    fetch(price_2).then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'price';
        alink.click();
      });
    });
  };
  return (
    <ContainerContent
      name={'Прейскурант цен'}
      content={
        <Links>
          {/*<a href={price}>*/}
          {/*  Скачать “Прейскурант №1-ИМ: Цены на газосипользующее оборудование, материалы,*/}
          {/*  комплектующие”{' '}*/}
          {/*</a>*/}
          <button onClick={onButtonClick}>
            Скачать “Прейскурант №1-ИМ: Цены на газосипользующее оборудование, материалы,
            комплектующие
          </button>
          <button onClick={onButtonClickPRice}>
            Скачать “Прейскурант №1: Тарифы на работы(услуги) оказываемые населению”
          </button>
          {/*<a href={price_2}>*/}
          {/*  Скачать “Прейскурант №1: Тарифы на работы(услуги) оказываемые населению”*/}
          {/*</a>*/}
          <a target={'_blank'} rel="opener" href={require('../../assets/pdf/price/three.pdf')}>
            Скачать “Прейскурант №9: Тарифы на работы по техническому обслуживанию газопроводов и
            газоиспользующего оборудования”
          </a>
          <a target={'_blank'} rel="noopener" href={require('../../assets/pdf/price/four.pdf')}>
            Скачать “Прейскурант №11: на работы по установке приборов индивидуального учета расхода
            газа в существующем жилом фонде (газифицированные жилые дома)”{' '}
          </a>
        </Links>
      }
    />
  );
}
