import { Link } from '../../pages/company/styles';
import React, { useCallback, useEffect, useState } from 'react';
import ContainerContent from '../Container';
import SubTitleFun from '../SubTitle';
import {
  ContainerInform,
  TextForInformation,
} from '../../pages/feedback/electronicCirculationForEntity/styles';
import axios from 'axios';
import { APItenders } from '../../backend';

export default function Tenders() {
  // const [info, setInfo] = useState([]);
  // const divs = document.getElementById('electronic-appeal');
  // console.log(divs);
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:5000/tenders')
  //     .then((res) => {
  //       setInfo(res.data);
  //       console.log(res.data);
  //     })
  //     .catch((e) => {
  //       {
  //         console.log(e);
  //       }
  //     });
  // }, [setInfo]);
  // const getElement = useCallback((id) => {
  //   return document.getElementById(`electronic-appeal-${id}`);
  // }, []);
  // useEffect(() => {
  //   info.forEach((el) => {
  //     const element = getElement(el._id);
  //     if (element) {
  //       element.innerHTML += el.content;
  //     }
  //   });
  // }, [getElement, info]);
  return (
    <ContainerContent
      name={'Тендеры и закупки'}
      content={
        <>
          {/*<div>*/}
          {/*  {!!info.length &&*/}
          {/*    info.map((el) => (*/}
          {/*      <ContainerInform style={{ marginBottom: '50px' }}>*/}
          {/*        <SubTitleFun*/}
          {/*          color={'blue'}*/}
          {/*          infoSubTitle={'Приглашение на участие в процедуре переговоров'}*/}
          {/*        />*/}
          {/*        <TextForInformation id={`electronic-appeal-${el._id}`} />*/}
          {/*      </ContainerInform>*/}
          {/*    ))}*/}
          {/*</div>*/}
          <ContainerInform
            className={'electronic-appeal-for-entity'}
            style={{ marginBottom: '50px' }}
          >
            {' '}
            <TextForInformation>
              <SubTitleFun
                color={'blue'}
                infoSubTitle={'Приглашение на участие в процедуре переговоров'}
              />
              <p>
                УП «МИНГАЗ» приглашает принять участие в процедуре переговоров по выбору
                генподрядной организации для строительства лотов (объектов):
              </p>
              <p>
                Лот №1 «Подключение к действующей системе газоснабжения природным газом по адресу:
                с.т. «Перелесок», 42, Пицко Ю.Ж.».
              </p>
              <p>
                Способ проведения переговоров: без предварительного квалификационного отбора, без
                проведения процедуры улучшения предложения для переговоров.
              </p>
              <p>
                Документации для переговоров можно получить безвозмездно: с понедельника по четверг
                с 08-00 до 17-00 и в пятницу с 8-00 до 15-45, по адресу: 220037, г.Минск,
                ул.Ботаническая, 11/2, к.112, тел: (017)299-28-34 обеденный перерыв с 12-00 до
                12-45, в печатной форме на бумажном носителе или в электронной форме не позднее двух
                рабочих дней со дня письменного обращения участника.
              </p>
              <p>
                Предложения для переговоров представляются участниками переговоров в срок до 11.00
                23.12.2022 г. Предложение для переговоров представляется по адресу: 220037, г.Минск,
                ул.Ботаническая, 11/1, кабинет № 101 (канцелярия).
              </p>
              <p>
                Заседание конкурсной комиссии{' '}
                <strong style={{ color: 'red' }}>23.12.2022 г. в 13.00</strong> по адресу: г.Минск,
                ул.Ботаническая, 11/1, конференц-зал.
              </p>
              <p>
                Организатор переговоров УП «МИНГАЗ». Р/с BY17AKBB30121087600145300000 в ЦБУ №514 ОАО
                «АСБ «Беларусбанк», БИК AKBBBY2Х, УНП 100308563, ОКПО 03000992. Е-mail:
                sz@mingas.by. Ответственный исполнитель: Инженер службы заказчика (СЗ) Царицанская
                И.В. Тел/факс: (017)299-28-34/299-29-09.
              </p>
            </TextForInformation>
          </ContainerInform>
          <ContainerInform
            className={'electronic-appeal-for-entity'}
            style={{ marginBottom: '50px' }}
          >
            {' '}
            <TextForInformation>
              <SubTitleFun
                color={'blue'}
                infoSubTitle={'Приглашение на участие в процедуре переговоров'}
              />
              <p>
                УП «МИНГАЗ» приглашает принять участие в процедуре переговоров по выбору
                генпроектировщика на выполнение проектных и изыскательских работ по лотам
                (объектам):
              </p>
              <p>
                1) Строительство (реконструкция) системы газоснабжения и газопотребления
                индивидуальных жилых домов;
              </p>
              <p>
                2) Строительство (реконструкции) системы газоснабжения и газопотребления садовых
                домов, хозпостроек жилых домов.
              </p>
              <p>
                Способ проведения переговоров: без предварительного квалификационного отбора, без
                проведения процедуры улучшения предложения для переговоров.
              </p>
              <p>
                Документацию для переговоров можно получить безвозмездно: с понедельника по четверг
                с 08-00 до 17-00 и в пятницу с 8-00 до 15-45, по адресу: 220037, г.Минск,
                ул.Ботаническая, 11, к, 301, тел: (017)299-28-56, обеденный перерыв с 12.00 до
                12.45, в электронной форме oks@mingas.by не позднее двух рабочих дней со дня
                письменного обращения участника.
              </p>
              <p>
                Предложения для переговоров представляются участниками переговоров в срок до 11.00
                23.12.2022 г. Предложение для переговоров представляется по адресу: 220037, г.Минск,
                ул.Ботаническая, 11/1, кабинет № 101 (канцелярия).
              </p>
              <p>
                Заседание конкурсной комиссии{' '}
                <strong style={{ color: 'red' }}>23.12.2022 г. в 13.00</strong> по адресу: г.Минск,
                ул.Ботаническая, 11/1, конференц-зал.
              </p>
              <p>
                Организатор переговоров УП «МИНГАЗ». Р/с BY17AKBB30121087600145300000 в ЦБУ №514 ОАО
                «АСБ «Беларусбанк», БИК AKBBBY2Х, УНП 100308563, ОКПО 03000992.
              </p>
              <p>
                {' '}
                Е-mail: sz@mingas.by. Ответственный исполнитель: Инженер службы заказчика (СЗ)
                Царицанская И.В. Тел/факс: (017)299-28-34/299-29-09.
              </p>
            </TextForInformation>
          </ContainerInform>
          <Link>
            <a
              rel={'noreferrer'}
              target={'_blank'}
              href={
                'https://icetrade.by/search/aucArchive?search_text=%D0%9C%D0%B8%D0%BD%D0%B3%D0%B0%D0%B7&search=%D0%9D%D0%B0%D0%B9%D1%82%D0%B8&zakup_type%5B1%5D=1&zakup_type%5B2%5D=1&auc_num=&okrb=&company_title=&participant=&establishment=0&industries=&period=&created_from=&created_to=&request_end_from=&request_end_to=&t%5BTrade%5D=1&t%5BeTrade%5D=1&t%5BsocialOrder%5D=1&t%5BsingleSource%5D=1&t%5BAuction%5D=1&t%5BRequest%5D=1&t%5BcontractingTrades%5D=1&t%5Bnegotiations%5D=1&t%5BOther%5D=1&r%5B1%5D=1&r%5B2%5D=2&r%5B7%5D=7&r%5B3%5D=3&r%5B4%5D=4&r%5B6%5D=6&r%5B5%5D=5&sort=num%3Adesc&sbm=1&onPage=20'
              }
            >
              <p>
                УП «МИНГАЗ» осуществляет проведение процедур закупок товаров (работ, услуг) по
                принципу открытости и прозрачности посредством ресурса www.icetrade.by
              </p>
              <img alt={'картинка грузится'} src={require('../../assets/png/icetrade.png')} />{' '}
            </a>
          </Link>
        </>
      }
    />
  );
}
