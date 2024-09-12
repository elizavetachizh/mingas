import React, { useCallback, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import anketa from '../../../assets/wordFile/ANKETA.doc';
import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosPin, IoMdClock } from 'react-icons/io';
import { LinksNetwork } from '../../../components/footer/styles';
import { useFetchVacanciesQuery } from '../../../redux/services/vacancies';
import Loader from '../../../components/Loader';
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
  const { data: vacancies, isLoading } = useFetchVacanciesQuery();
  const getElement = useCallback((id) => {
    return document.getElementById(`vacancy-${id}`);
  }, []);
  useEffect(() => {
    vacancies?.forEach((el) => {
      const element = getElement(el._id);
      if (element) {
        element.innerHTML += el.description;
      }
    });
  }, [getElement, vacancies]);

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
        {isLoading ? (
          <Loader />
        ) : (
          vacancies?.map((vacancy, index) => (
            <General key={index} className={'with-border'}>
              <BtnIsOpen>
                <p>{vacancy.name}</p>
              </BtnIsOpen>
              <Div className={`shake`} id={`vacancy-${vacancy._id}`} />
            </General>
          ))
        )}
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
