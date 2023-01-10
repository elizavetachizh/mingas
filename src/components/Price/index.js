import React, { useEffect, useState } from 'react';
import { Links } from './styles';
import ContainerContent from '../Container';
import axios from 'axios';
import one from '../../assets/pdf/price/new.pdf';
import two from '../../assets/pdf/price/four.pdf';
import three from '../../assets/pdf/price/one.pdf';
import four from '../../assets/pdf/price/seven.pdf';
import five from '../../assets/pdf/price/three.pdf';
import six from '../../assets/pdf/price/two.pdf';
import dogovor from '../../assets/wordFile/dogovor_opertsionni_control.doc';
import {API, APIimage} from '../../backend';
export default function ResidentsOfCapitalRegion() {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios(`${API}/prices`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  useEffect(() => {
    console.log(info);
  }, [info]);
  return (
    <ContainerContent
      name={'Прейскурант цен'}
      content={
        <Links>
          <a href={six} target={'_blank'} rel="opener noreferrer">
            {' '}
            Скачать “Прейскурант №1: Тарифы на работы(услуги) оказываемые населению”
          </a>
          <a href={three} target={'_blank'} rel="opener noreferrer">
            Скачать “Прейскурант №1-ИМ: Цены на газосипользующее оборудование, материалы,
            комплектующие”
          </a>
          <a href={four} target={'_blank'} rel="opener noreferrer">
            Скачать “Прейскурант №7: Тарифы на работы по ведению технического надзора за
            строительством систем газоснабжения и приемке объектов в эксплуатацию”
          </a>
          <a href={dogovor} target={'_blank'} rel="opener noreferrer">
            Договор операционный контроль
          </a>
          <a href={five}>
            Скачать “Прейскурант №9: Тарифы на работы по техническому обслуживанию газопроводов и
            газоиспользующего оборудования”
          </a>
          <a href={two} target={'_blank'} rel="opener noreferrer">
            Скачать “Прейскурант №11: на работы по установке приборов индивидуального учета расхода
            газа в существующем жилом фонде (газифицированные жилые дома)”
          </a>
          <a href={one} target={'_blank'} rel="opener noreferrer">
            Скачать “Прейскурант №2: Тарифы на работы (услуги), оказываемые предприятиям и
            организациям”
          </a>

          {!!info.length &&
            info.map((el) => (
              <a
                href={`${APIimage}/${el.description}`}
                id={'href'}
                target={'_blank'}
                rel="opener noreferrer"
              >
                {el.name}
              </a>
            ))}
        </Links>
      }
    />
  );
}
