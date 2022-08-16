import { Container } from '../../pages/styles';
import Header from '../header';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import Footer from '../footer';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';
import React, { useState } from 'react';
import {
  BtnIsOpen,
  ContainerInformAboutService,
  Div,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Table, Tbody, Thead } from '../../pages/feedback/receptionOfCitizens/styles';

export default function AdministartiveServicesForLegal() {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const [isClose, setIsClose] = useState(false);
  const animateClose = () => {
    setIsClose(true);
    if (isClose) {
      setIsClose(false);
    }
  };
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <div style={{ width: '100%', margin:  '8% 4%' }}>
          {' '}
          <ContainerInformAboutService>
            <h3>
              1. Выдача заключения о соответствии принимаемого в эксплуатацию объекта строительства
              разрешительной и проектной документации (в части энергетической безопасности) (п.
              3.9.7)
            </h3>
            <p>
              Максимальный срок осуществления административной процедуры:
              <strong>5 рабочих дней</strong>
            </p>
            <p>
              Срок действия справки, другого документа (решения), выдаваемых (принимаемого) при
              осуществлении административной процедуры: <strong>бессрочно</strong>
            </p>
            <p>
              Размер платы, взимаемой при осуществлении административной процедуры:
              <strong>бесплатно</strong>
            </p>
            <BtnIsOpen onClick={animate}>
              <p>Документы и (или) сведения для осуществления административной процедуры: </p>
              <div>
                {isOpen ? (
                  <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
                ) : (
                  <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
                )}
              </div>
            </BtnIsOpen>
            <Div className={isOpen && `shake`}>
              <ul>
                <li>заявление;</li>
                <li>проектная документация.</li>
              </ul>
            </Div>
            <BtnIsOpen onClick={animateClose}>
              <p>Контактная информация: </p>{' '}
              <div>
                {isClose ? (
                  <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
                ) : (
                  <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
                )}
              </div>
            </BtnIsOpen>
            <Div className={isClose && `shake`}>
              <h4>УП «Мингаз»</h4>
              <Table>
                <Thead>
                  <tr>
                    <th>Должность, ФИО лица ответственного за прием заявлений</th>
                    <th>Номер телефона </th>
                    <th>Время приема</th>
                  </tr>
                </Thead>
                <Tbody>
                  <tr>
                    <td>
                      заместитель главного инженера
                      <br />
                      Сазанчук А.Л.
                    </td>
                    <td>
                      тел. 299-28-42,
                      <br />
                      каб. 220.
                    </td>
                    <td>
                      8:00-17:00 (пн.-чт.) <br />
                      8:00-15:45 (пт.)
                      <br />
                      обед: 12:00-13:00
                    </td>
                  </tr>
                </Tbody>
              </Table>
            </Div>
            <hr />
          </ContainerInformAboutService>
          <ContainerInformAboutService>
            <h3>
              1.2. Выдача разрешения на право производства ремонтных, строительных и земляных работ
              в охранной зоне объектов газораспределительной системы (п. 3.15.1), доступна на едином
              портале электронных услуг
              <a
                href={
                  'https://portal.gov.by/PortalGovBy/faces/wcnav_defaultSelection?_afrLoop=543689736120647&_afrWindowMode=0&_afrWindowId=null#%40%3F_afrWindowId%3Dnull%26_afrLoop%3D543689736120647%26_afrWindowMode%3D0%26_adf.ctrl-state%3D17x2lbhmqq_32'
                }
              >
                (portal.gov.by)
              </a>
            </h3>
            <p>
              Максимальный срок осуществления административной процедуры:
              <strong>5 рабочих дней</strong>
            </p>
            <p>
              Срок действия справки, другого документа (решения), выдаваемых (принимаемого) при
              осуществлении административной процедуры: <strong>бессрочно</strong>
            </p>
            <p>
              Размер платы, взимаемой при осуществлении административной процедуры:
              <strong>бесплатно</strong>
            </p>
            <BtnIsOpen onClick={animate}>
              <p>Документы и (или) сведения для осуществления административной процедуры: </p>
              <div>
                {' '}
                {isOpen ? (
                  <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
                ) : (
                  <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
                )}
              </div>
            </BtnIsOpen>
            <Div className={isOpen && `shake`}>
              <ul>
                <li>заявление;</li>
                <li>проект плана производства работ.</li>
              </ul>
            </Div>
            <BtnIsOpen onClick={animateClose}>
              <p>Контактная информация: </p>{' '}
              <div>
                {isClose ? (
                  <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
                ) : (
                  <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
                )}
              </div>
            </BtnIsOpen>
            <Div className={isClose && `shake`}>
              <h4>УП «Мингаз»</h4>
              <Table>
                <Thead>
                  <tr>
                    <th>Должность, ФИО лица ответственного за прием заявлений</th>
                    <th>Номер телефона </th>
                    <th>Время приема</th>
                  </tr>
                </Thead>
                <Tbody>
                  <tr>
                    <td>
                      руководитель сектора:
                      <br />
                      Ковалевич И.Ю.,
                      <br />
                      мастера:
                      <br />
                      Козенко И.Р.,
                      <br />
                      Заренок В.А.,
                      <br />
                      Воронкова Т.Н.
                    </td>
                    <td>
                      тел. 299-28-26,
                      <br />
                      каб. 111.
                    </td>
                    <td>
                      8:30-16:30 (пн.-чт.) <br />
                      8:30-15:15 (пт.)
                      <br />
                      обед: 12:00-12:45
                    </td>
                  </tr>
                </Tbody>
              </Table>
            </Div>
            <hr />
          </ContainerInformAboutService>
        </div>

        {/*</ContainerInform>*/}
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
