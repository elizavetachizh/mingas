import React, { useEffect, useState } from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { Helmet } from 'react-helmet';
import { DivForm } from './styles';
import up from '../../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import anketa from '../../../assets/wordFile/ANKETA.doc';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import {
  BtnIsOpen,
  Div,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp, IoIosPin, IoMdClock } from 'react-icons/io';
import { LinksNetwork } from '../../../components/footer/styles';
import Feedback from '../../feedback';
import minsk from '../../../assets/background/phone.webp';
const url =
  'https://api.hh.ru/widgets/vacancies/employer?employer_id=1063725&locale=RU&links_color=1560b2&border_color=1560b2&host=rabota.by';
const div = document.createElement('div');
document.body.appendChild(div);

export default function Career() {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    const script = document.createElement('script');
    script.src = url;
    script.async = true;
    div.appendChild(script);
    return () => {
      div.removeChild(script);
    };
  }, []);
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <Feedback className={'none'} img={minsk} name={'Работа в УП "МИНГАЗ"'} />
      <HeaderCompany />
      <AdditionalDiv style={{ margin: '4% auto' }}>
        <DivForm className="form-div">
          <div className="form-div-career">
            {' '}
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
          <BtnIsOpen className={'btn-is-open'} onClick={animate}>
            <p>Полезная информация:</p>
            <div>
              {isOpen ? (
                <IoIosArrowUp style={{ color: '#0e43af', margin: '36% 0' }} />
              ) : (
                <IoIosArrowDown style={{ color: '#0e43af', margin: '36% 0' }} />
              )}
            </div>
          </BtnIsOpen>
          <Div style={{ width: '70%', margin: '4% auto' }} className={isOpen && `shake`}>
            <p>
              При приеме на работу предлагаем заполнить{' '}
              <a download href={anketa}>
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
              <li>
                трудовую книжку, за исключением впервые поступающего на работу и совместителей;
              </li>
              <li>
                диплом или иной документ об образовании и профессиональной подготовке,
                подтверждающий наличие права на выполнение данной работы;
              </li>
              <li>страховое свидетельство;</li>
              <li>медицинскую справку о состоянии здоровья;</li>
              <li>
                другие документы о подтверждении иных обстоятельств, имеющих отношение к работе,
                если их предъявление предусмотрено законодательными актами.
              </li>
            </ul>
            <LinksNetwork
              style={{ left: '0', margin: '0 0 2%' }}
              // style={{ width: '51%' }}
            >
              <IoMdClock
                style={{ margin: '0 4%', color: '#0e43af', width: '40px', height: '40px' }}
              />
              <div>
                График работы:
                <br /> понедельник-четверг: 8:00 – 17:00,
                <br />
                пятница: 8:00 – 15:45 перерыв: 12.00 – 12.45
              </div>
            </LinksNetwork>
            <LinksNetwork
              style={{ left: '0', margin: '0' }}
              // style={{ width: '51%' }}
            >
              <IoIosPin
                style={{ margin: '0 4%', color: '#0e43af', width: '40px', height: '40px' }}
              />
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
        </DivForm>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
