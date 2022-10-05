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
    certificateValidityPeriod: ' действует бессрочно',
    boardSize: 'бесплатно',
    documents: (
      <ul>
        <li>заявление</li>
        <li>проект плана производства работ</li>
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
];
