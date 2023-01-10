import { Table, Tbody, Td, Tr } from '../../pages/concats/GeneralContactInform/styles';
import { Thead } from '../../pages/feedback/receptionOfCitizens/styles';
import React from 'react';
import pervichniaOrganiztsia from '../wordFile/pervichnaia_organizatsia_tu.docx';

export const AdministrativeServicesForBusines = [
  {
    serviceID: 1,
    serviceName: 'Труд и социальная защита',
    uniqueName:
      'Выдача разрешения на право производства ремонтных, строительных и земляных работ в охранной зоне объектов газораспределительной системы (п. 3.15.1), доступна на едином портале электронных услуг',
    maximumImplementationPeriod: '5 рабочих дней',
    certificateValidityPeriod:
      'действует до даты окончания производства ремонтных, строительных и земляных работ в охранной зане объектов газораспределительной системы, указанной заинтересованным лицом в заявлении о получении разрешения на право производства ремонтных, строительных и земляных работ в охранной зоне объекта газораспределительной системы, но не более трех месяцев',
    boardSize: 'бесплатно',
    documents: (
      <ul>
        Для получения разрешения на право производства ремонтных, строительных и земляных работ в
        охранной зоне объектов газораспределительной системы рекомендуем воспользоваться{' '}
        <a
          href={
            'https://portal.gov.by/PortalGovBy/faces/wcnav_defaultSelection?_afrLoop=27796491789714&_afrWindowMode=0&_afrWindowId=null#%40%3F_afrWindowId%3Dnull%26_afrLoop%3D27796491789714%26_afrWindowMode%3D0%26_adf.ctrl-state%3Dtipubvmml_22'
          }
        >
          Единым порталом электронных услуг
        </a>
        (код{' '}
        <a
          href={
            'https://portal.gov.by/PortalGovBy/faces/oracle/webcenter/portalapp/pages/main/search.jspx?searchText=156.3.13&_adf.ctrl-state=1d8flotpsm_26&_afrLoop=27827140305902&_afrWindowMode=0&_afrWindowId=null#%40%3F_afrWindowId%3Dnull%26_afrLoop%3D27827140305902%26searchText%3D156.3.13%26_afrWindowMode%3D0%26_adf.ctrl-state%3Dtipubvmml_40'
          }
        >
          ОАИС 156.3.13
        </a>
        ).
        <li>
          <a href={'https://pravo.by/document/?guid=12551&p0=W22239193&p1=1'}>
            Заявление (стр. 30 постановления Министерства Энергетики Республики Беларусь от 29
            ноября 2022 г. № 39){' '}
          </a>
        </li>
        <li>проект производства работ </li>
      </ul>
    ),
    contactInform: (
      <div>
        <h4>УП «Мингаз»</h4>
        <Table>
          <Thead>
            <Tr>
              <th>Должность, ФИО лица ответственного за прием заявлений</th>
              <th>Номер телефона </th>
              <th>Время приема</th>
            </Tr>
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
      </div>
    ),
  },
  {
    serviceID: 3,
    serviceName: 'Газоснабжение',
    linkId: 3,
    uniqueName: 'Выдача технических условий для садового товарищества (п.10.4.1)',
    maximumImplementationPeriod: '10 дней со дня подачи заявления',
    certificateValidityPeriod: 'действительно 2 года',
    boardSize: 'бесплатно',
    documents: (
      <ul>
        <li>
          <a href={pervichniaOrganiztsia} download>
            заявление
          </a>
        </li>
        <li>документ, подтверждающий право собственности на жилой дом, подлежащий газификации</li>
      </ul>
    ),
    contactInform: (
      <div>
        <h4>УП «Мингаз»</h4>
        <Table>
          <Thead>
            <Tr>
              <th>Должность, ФИО лица ответственного за прием заявлений</th>
              <th>Номер телефона </th>
              <th>Время приема</th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                инженеры:
                <br />
                Королева В.А.,
                <br />
                Лапаник Т.А.,
                <br />
                Пуховская Н.В.,
                <br />
                Лагодич А.А.,
                <br />
                Чернышова А.В.,
              </Td>
              <Td>
                тел. <a href={'tel:+375 (017) 299-29-23'}>+375 (017) 299-29-23</a>, <br />
                <a href={'tel:+375 (017) 299-28-12'}>+375 (017) 299-28-12</a>, <br />
                <a href={'tel:>+375 (017) 299-29-18'}>+375 (017) 299-29-18</a>. <br />
                каб. №120, 121, 123, 126, 128, 129.
              </Td>
              <Td>
                8:00-20:00 (пн.-пт.) <br />
                8:00 – 17:00 (суббота)
                <br />
                обед: 12:00-12:45
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    ),
  },
  {
    serviceID: 1,
    serviceName: 'Труд и социальная защита',
    uniqueName:
      'Получение разрешения на право производства работ в охранной зоне электрических и (или) тепловых сетей (п. 3.15.2)',
    maximumImplementationPeriod: '5 рабочих дней',
    certificateValidityPeriod:
      'действует до даты окончания производства ремонтных работ, но не более трех месяцев',
    boardSize: 'бесплатно',
    documents: (
      <ul>
        <li>заявление о производстве работ</li>
        <li>проект производства работ и (или) технологическая карта</li>
      </ul>
    ),
    contactInform: (
      <div>
        <h4>УП «Мингаз»</h4>
        <Table>
          <Thead>
            <Tr>
              <th>Должность, ФИО лица ответственного за прием заявлений</th>
              <th>Номер телефона </th>
              <th>Время приема</th>
            </Tr>
          </Thead>
          <Tbody>
            <tr>
              <td>
                мастер Тагунов К.В.,
                <br />
                начальник УТЭХ Фёдоров А.Ю.
              </td>
              <td>
                тел. 299-29-44,
                <br />
                каб. 9 РМЦ.
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
      </div>
    ),
  },
];
