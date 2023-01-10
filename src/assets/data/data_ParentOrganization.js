import { Table } from '../../pages/feedback/receptionOfCitizens/styles';
import React from 'react';

export const data = [
  {
    cardId: 1,
    name: 'Министерство энергетики Республики Беларусь',
    link: 'https://www.minenergo.gov.by/',
    img: 'ministerstvo',
    info: (
      <>
        {' '}
        <Table>
          <thead>
            <tr>
              <th>Адрес</th>
              <th>Контактный телефон </th>
              <th>Время работы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>220030, г.Минск, ул. К.Маркса, 14</td>
              <td>+375 (17) 218 21 03</td>
              <td>
                ПН-ПТ: с 9:00 до 18:00. <br />
                Обеденный перерыв: 13:00 - 14:00.
                <br />
                Выходные дни: суббота, воскресенье
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    ),
  },
  {
    cardId: 2,
    name: 'Государственное производственное объединение по топливу и газификации «БЕЛТОПГАЗ»',
    link: 'http://www.topgas.by',
    img: 'beltopgas',
    info: (
      <>
        {' '}
        <Table>
          <thead>
            <tr>
              <th>Адрес</th>
              <th>Контактный телефон </th>
              <th>Время работы</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>220030, г.Минск, ул. К.Маркса, 14</td>
              <td>+375 (17) 311 30 33</td>
              <td>
                ПН-ПТ: с 9:00 до 18:00. <br />
                Обеденный перерыв: 13:00 - 14:00.
                <br />
                Выходные дни: суббота, воскресенье
              </td>
            </tr>
          </tbody>
        </Table>
      </>
    ),
  },
];
