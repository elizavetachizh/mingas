import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import anketa from '../../../assets/wordFile/ANKETA.doc';
import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosPin, IoMdClock } from 'react-icons/io';
import { LinksNetwork } from '../../../components/footer/styles';
import { Table } from '../../feedback/receptionOfCitizens/styles';
const url =
  'https://api.hh.ru/widgets/vacancies/employer?employer_id=1063725&locale=RU&links_color=1560b2&border_color=1560b2&host=rabota.by';

export default function Career() {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const script = document.createElement('script');
  useEffect(() => {
    script.src = url;
    script.async = true;
    div.appendChild(script);
    return () => {
      div.removeChild(script);
    };
  }, [div, script]);
  return (
    <>
      <div style={{ marginTop: '1rem' }} className="form-div-career">
        <script
          className="hh-script"
          src="https://api.hh.ru/widgets/vacancies/employer?employer_id=1063725&locale=RU&links_color=1560b2&border_color=1560b2"
        ></script>
        <Helmet>
          <script
            className="hh-script"
            src="https://api.hh.ru/widgets/vacancies/employer?employer_id=1063725&locale=RU&links_color=1560b2&border_color=1560b2"
          ></script>
        </Helmet>
      </div>
      <Div style={{ width: '100%', margin: '0 auto' }} className={`shake`}>
        <General>
          <BtnIsOpen>
            <p>Приглашаем на работу приемщиков заказов и контролёров газоснабжающей организации</p>
          </BtnIsOpen>
          <Div className={`shake`}>
            <strong>УП «МИНГАЗ» в новый офис на улице П.Бровки</strong>
            <p>
              Приглашает на работу{' '}
              <u>приемщиков заказов и контролёров газоснабжающей организации</u>
            </p>
            <p>НАШИ ПЛЮСЫ:</p>
            <p> стабильная работа</p> <p>офис в центре города (рядом метро Академия наук)</p>{' '}
            <p> расширенный социальный пакет</p> <p>удобный график</p>{' '}
            <p>возможность построения карьеры</p> <p>достойная заработная плата</p>{' '}
            <p>НАШИ МИНУСЫ: НЕТ</p> <p> Всему можно научиться, у тебя тоже получится!</p>{' '}
            <p>По вопросам трудоустройства обращаться по тел. 299 29 36, 299 28 30, 299 28 62.</p>
          </Div>
        </General>
        <General>
          <BtnIsOpen>
            <p>Приглашаем на работу машиниста экскаватора</p>
          </BtnIsOpen>
          <Div className={`shake`}>
            <strong>УП «МИНГАЗ» приглашает на работу</strong>
            <p>
              Приглашает на работу <u>машиниста экскаватора</u>
            </p>
            <p>Условия оплаты труда достойные </p>
            <p>Стабильная работа</p> <p>Расширенный социальный пакет</p>{' '}
            <p>
              Приходите по адресу: ул. Ботаническая, 11 1-ый подъезд, кабинет 103. Телефон 299 28
              30, 299 29 36, 299 28 62.
            </p>
          </Div>
        </General>
        <p>
          УП «МИНГАЗ» приглашает на целевое обучение на факультете горного дела и инженерной
          экологии Белорусского национального технического университета по следующим специальностям:
        </p>
        <Table>
          <thead>
            <tr>
              <th>Шифр и наименование специальности</th>
              <th>Наименование степени</th>
              <th>Квалификация специалиста, срок обучения</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>7-07-0714-01 машины и оборудование для горнодобывающих производств</td>
              <td>Магистр</td>
              <td>Горный инженер, 5,5 лет</td>
            </tr>
            <tr>
              <td>7-07-0724-01 Разработка месторождений полезных ископаемых</td>
              <td>Магистр</td>
              <td>Горный инженер, 5,5 лет</td>
            </tr>
          </tbody>
        </Table>
        <p>
          Телефон для справки: <span>80171342740</span>{' '}
        </p>
        <p>
          УП «МИНГАЗ» приглашает кандидатов для направления на обучение по целевой подготовке.
          Обращаться по телефонам <a href={'tel:+375 (017) 299 28 30'}>+375 (017) 299 28 30</a> и{' '}
          <a href={'tel:+375 (017) 299 29 36'}>+375 (017) 299 29 36</a>.
        </p>
        <p>
          При приеме на работу предлагаем заполнить{' '}
          <a style={{ fontWeight: 'bold' }} download href={anketa}>
            анкету
          </a>{' '}
          и отправить на e-mail: ok@mingas.by.
        </p>
        <h3>Документы для трудоустройства:</h3>
        <ul>
          <li>документ, удостоверяющий личность;</li>
          <li>
            документы воинского учета (для военнообязанных и лиц, подлежащих призыву на воинскую
            службу);
          </li>
          <li>трудовую книжку, за исключением впервые поступающего на работу и совместителей;</li>
          <li>
            диплом или иной документ об образовании и профессиональной подготовке, подтверждающий
            наличие права на выполнение данной работы;
          </li>
          <li>страховое свидетельство;</li>
          <li>медицинскую справку о состоянии здоровья;</li>
          <li>
            другие документы о подтверждении иных обстоятельств, имеющих отношение к работе, если их
            предъявление предусмотрено законодательными актами.
          </li>
        </ul>
        <LinksNetwork style={{ left: '0', margin: '0 0 2%' }}>
          <IoMdClock style={{ margin: '0 4%', color: '#0e43af', width: '40px', height: '40px' }} />
          <div>
            График работы:
            <br /> понедельник-четверг: 8:00 – 17:00,
            <br />
            пятница: 8:00 – 15:45 перерыв: 12.00 – 12.45
          </div>
        </LinksNetwork>
        <LinksNetwork style={{ left: '0', margin: '0' }}>
          <IoIosPin style={{ margin: '0 4%', color: '#0e43af', width: '40px', height: '40px' }} />
          <div>
            Телефон:{' '}
            <a href={'tel:8017-299-29-36'}>
              <br />
              8017-299-29-36
            </a>
            ,<br />
            <a href={'tel:8017-299-28-62'}>8017-299-28-62</a> <br />
            Адрес:{' '}
            <a href={'https://yandex.by/maps/-/CCURbUwY2B'} target="_blank" rel="noreferrer">
              г. Минск, ул. Ботаническая, 11 (1 подъезд)
            </a>
          </div>
        </LinksNetwork>
      </Div>
    </>
  );
}
