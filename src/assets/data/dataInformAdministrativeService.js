import { Table, Td, Tr, Tbody } from '../../pages/concats/GeneralContactInform/styles';
import { Thead } from '../../pages/feedback/receptionOfCitizens/styles';
import lgota from '../wordFile/lgota.doc';
import pervichniaOrganiztsia from '../wordFile/pervichnaia_organizatsia_tu.docx';
import pcd_cmd_procedure from '../wordFile/pcd_CMP_procedure.doc';
export const data = [
  {
    serviceID: 2,
    linkId: 3,
    serviceName: 'Труд и социальная защита',
    uniqueName:
      'Выдача справки о периоде работы, службы  (п.2.3.) - для сотрудников (в т.ч бывших) Организации',
    maximumImplementationPeriod: '5 дней со дня обращения',
    certificateValidityPeriod: ' действует бессрочно',
    boardSize: 'бесплатно',
    documents: '',
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
                начальник ОК
                <br />
                Покусаева Л.В.
              </Td>
              <Td>
                тел. <a href={'tel:+375 (017) 299-28-62'}>+375 (017) 299-28-62</a>. <br />
                каб. 103-104,
              </Td>
              <Td>
                8:00-17:00 (пн.-чт.) <br />
                8:00-15:45 (пт.)
                <br />
                обед: 12:00-12:45;
              </Td>
            </Tr>
          </Tbody>
        </Table>
        {/*<Table>*/}
        {/*  <Thead>*/}
        {/*    <Tr>*/}
        {/*      <th>Должность, ФИО лица ответственного за прием заявлений</th>*/}
        {/*      <th>Номер телефона </th>*/}
        {/*      <th>Время приема</th>*/}
        {/*    </Tr>*/}
        {/*  </Thead>*/}
        {/*  <Tbody>*/}
        {/*    <Tr>*/}
        {/*      <Td>*/}
        {/*        начальник ОК*/}
        {/*        <br />*/}
        {/*        Покусаева Л.В.*/}
        {/*      </Td>*/}
        {/*      <Td>*/}
        {/*        тел. <a href={'tel:+375(017)-299-28-62'}>+375(017)-299-28-62</a>. <br />*/}
        {/*        каб. 103-104,*/}
        {/*      </Td>*/}
        {/*      <Td>*/}
        {/*        8:00-17:00 (пн.-чт.) <br />*/}
        {/*        8:00-15:45 (пт.)*/}
        {/*        <br />*/}
        {/*        обед: 12:00-12:45;*/}
        {/*      </Td>*/}
        {/*    </Tr>*/}
        {/*  </Tbody>*/}
        {/*</Table>*/}
        <h4>Филиал «ТБЗ Сергеевичское»</h4>
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
                специалист по кадрам филиала «ТБЗ Сергеевичское»
                <br />
                Полещук Л.В.
              </Td>
              <Td>
                <a href={'tel:+375 (017) 134-27-40'}>тел. +375 (017) 134-27-40</a>.
              </Td>
              <Td>
                8:00-17:00 (пн.-пт.)
                <br />
                обед: 12:00-13:00
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <h4>Филиал «Бубны»</h4>
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
              <td>
                специалист по кадрам филиала «Бубны»
                <br />
                Сачивко А.Т.,
              </td>
              <Td>
                <a href={'tel:+375 (017) 712-36-22'}>тел. +375 (017) 712-36-22</a>;
              </Td>
              <Td>
                8:00-17:00 (пн.-пт.)
                <br />
                обед: 12:00-13:00
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    ),
  },
  {
    serviceID: 2,
    linkId: 4,
    serviceName: 'Труд и социальная защита',
    uniqueName:
      'Выдача справки о размере заработной платы (денежного довольствия, ежемесячного денежного содержания) (п.2.4.) - для сотрудников (в т.ч бывших) Организации',
    maximumImplementationPeriod: '5 дней со дня обращения',
    certificateValidityPeriod: ' действует бессрочно',
    boardSize: 'бесплатно',
    documents: '',
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
                руководитель группы ЦБ Дудковская И.А.,
                <br />
                бухгалтер ЦБ Нестерович И.М.,
                <br />
                бухгалтер ЦБ Сливкина О.О.,
                <br />
                бухгалтер ЦБ Михалко Л.И.
              </Td>
              <Td>
                тел. <a href={'tel:+375 (017) 299-28-07'}>+375 (017) 299-28-07</a>. <br />
                каб. 219,
              </Td>
              <Td>
                8:00-17:00 (пн.-чт.) <br />
                8:00-15:45 (пт.)
                <br />
                обед: 12:00-12:45;
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <h4>Филиал «ТБЗ Сергеевичское»</h4>
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
                начальник отдела бухгалтерского учета, анализа и планирования «ТБЗ «Сергеевичское»
                <br />
                Чернова О.И.
              </Td>
              <Td>
                <a href={'tel: +375 (017) 132-17-46'}>тел. +375 (017) 132-17-46</a>.
              </Td>
              <Td>
                8:00-17:00 (пн.-пт.)
                <br />
                обед: 12:00-13:00
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <h4>Филиал «Бубны»</h4>
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
                главный бухгалтер филиала «Бубны»
                <br />
                Коляго И.А.
              </Td>
              <Td>
                <a href={'tel:+375 (017) 712-36-31'}>тел. +375 (017) 712-36-31</a>;
              </Td>
              <Td>
                8:00-17:00 (пн.-пт.)
                <br />
                обед: 12:00-13:00
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    ),
  },
  {
    serviceID: 2,
    linkId: 18,
    serviceName: 'Труд и социальная защита',
    uniqueName:
      'Выдача справки о  периоде, за который выплачено пособие по беременности и родам (п.2.29) - для сотрудников (в т.ч бывших) Организации',
    maximumImplementationPeriod: '3 дней со дня обращения',
    certificateValidityPeriod: 'действует бессрочно',
    boardSize: 'бесплатно',
    documents: (
      <ul>
        <li>паспорт или иной документ, удостоверяющий личность</li>
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
                руководитель группы ЦБ Дудковская И.А.,
                <br />
                бухгалтер ЦБ Нестерович И.М.,
                <br />
                бухгалтер ЦБ Сливкина О.О.,
                <br />
                бухгалтер ЦБ Михалко Л.И.
              </Td>
              <Td>
                тел. <a href={'tel:+375 (017) 299-28-07'}>+375 (017) 299-28-07</a>. <br />
                каб. 219,
              </Td>
              <Td>
                8:00-17:00 (пн.-чт.) <br />
                8:00-15:45 (пт.)
                <br />
                обед: 12:00-12:45;
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <h4>Филиал «ТБЗ Сергеевичское»</h4>
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
                начальник отдела бухгалтерского учета, анализа и планирования «ТБЗ «Сергеевичское»
                <br />
                Чернова О.И.
              </Td>
              <Td>
                {' '}
                <a href={'tel: +375 (017) 132-17-46'}>тел. +375 (017) 132-17-46</a>.
              </Td>
              <Td>
                8:00-17:00 (пн.-пт.)
                <br />
                обед: 12:00-13:00
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <h4>Филиал «Бубны»</h4>
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
                главный бухгалтер филиала «Бубны»
                <br />
                Коляго И.А.
              </Td>
              <Td>
                <a href={'tel:+375 (017) 712-36-31'}>тел. +375 (017) 712-36-31</a>;
              </Td>
              <Td>
                8:00-17:00 (пн.-пт.)
                <br />
                обед: 12:00-13:00
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    ),
  },
  {
    serviceID: 3,
    serviceName: 'Газоснабжение',
    linkId: 1,
    uniqueName: 'Выдача справки о расчетах за потребленный природный газ (п.10.1)',
    maximumImplementationPeriod: '3 рабочих дня со дня подачи заявления',
    certificateValidityPeriod: 'действительно в течении 6 месяцев',
    boardSize: 'бесплатно',
    documents: (
      <ul>
        <li>заявление</li>
        <li>паспорт или иной документ, удостоверяющий личность</li>
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
                мастер <br />
                СУПГН
                <br />
                Осипенко Е.И
              </Td>
              <Td>каб. 130</Td>
              <Td>
                8:00-20:00 (пн.-пт.) <br />
                8:00–17:00 (сб.)
                <br />
                без перерыва,
                <br />
                прием по <br />
                электронной <br />
                очереди
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    ),
  },
  {
    serviceID: 3,
    serviceName: 'Газоснабжение',
    linkId: 2,
    uniqueName:
      'Оформление (регистрация при первичном обращении) льгот гражданам по оплате за потребленный газ (п.10.2)',
    maximumImplementationPeriod:
      '3 рабочих дня со дня подачи заявления, а в случае  запроса документов и (или) сведений от других государственных органов, иных организаций - 1 месяц',
    certificateValidityPeriod: 'действительно в течении 6 месяцев',
    boardSize: 'бесплатно',
    documents: (
      <ul>
        <li>
          <a download href={lgota}>
            заявление
          </a>
        </li>
        <li>паспорт или иной документ, удостоверяющий личность</li>
        <li>документ, подтверждающий право на льготы</li>
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
                мастер <br />
                СУПГН
                <br />
                Осипенко Е.И
              </Td>
              <Td>каб. 130</Td>
              <Td>
                8:00-20:00 (пн.-пт.) <br />
                8:00–17:00 (сб.)
                <br />
                без перерыва,
                <br />
                прием по <br />
                электронной <br />
                очереди
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    ),
  },
  {
    serviceID: 3,
    serviceName: 'Газоснабжение',
    linkId: 3,
    uniqueName: 'Выдача технических условий на газификацию одноквартирного жилого дома (п.10.4.1)',
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
    serviceID: 3,
    serviceName: 'Газоснабжение',
    linkId: 4,
    uniqueName:
      'Оказание услуг по газификации одноквартирного жилого дома с использованием услуг организаций, не входящих в состав Государственного производственного объединения по топливу и газификации «Белтопгаз» (п.10.4):',
    maximumImplementationPeriod: '10 дней со дня подачи заявления',
    certificateValidityPeriod: 'действительно 2 года',
    boardSize: 'бесплатно',
    documents: (
      <ul>
        <li>
          <a href={pcd_cmd_procedure}>заявление</a>
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
                <a href={'tel:+375 (017) 299-29-18'}>+375 (017) 299-29-18</a>. <br />
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
    serviceID: 3,
    serviceName: 'Газоснабжение',
    linkId: 5,
    uniqueName:
      'Приемка выполненных работ с оформлением акта сдачи системы газоснабжения в эксплуатацию (п.10.4.2)',
    maximumImplementationPeriod: '10 дней со дня подачи заявления',
    certificateValidityPeriod: 'действительно 2 года',
    boardSize: 'бесплатно',
    documents: (
      <ul>
        <li>исполнительно-техническая документация</li>
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
                руководитель группы:
                <br />
                Воронович А.И.,
                <br />
                инженеры:
                <br />
                Чмель Ж.В.
                <br />
                Исакова Е.В.
              </Td>
              <Td>
                тел.<a href={'tel:+375 (017) 299-28-13'}>+375 (017) 299-28-13</a>,
                <br />
                <a href={'tel:+375 (017) 299-28-08'}>+375 (017) 299-28-08</a>. каб. №122, 124.
              </Td>
              <Td>8:30-10:00 (пн.-пт.)</Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    ),
  },
  {
    serviceID: 3,
    serviceName: 'Газоснабжение',
    linkId: 6,
    uniqueName:
      'Заключение договора на газоснабжение, техническое обслуживание газового оборудования и внутридомовых систем газоснабжения (п.10.4.3)',
    maximumImplementationPeriod:
      '3 дня со дня приемки выполненных работ с оформлением акта сдачи системы газоснабжения в эксплуатацию',
    certificateValidityPeriod: 'действительно 2 года',
    boardSize: 'бесплатно',
    documents: (
      <ul>
        <li>исполнительно-техническая документация</li>
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
                мастер <br />
                СУПГН
                <br />
                Осипенко Е.И
              </Td>
              <Td>каб. 130</Td>
              <Td>
                8:00-20:00 (пн.-пт.) <br />
                8:00–17:00 (сб.)
                <br />
                без перерыва,
                <br />
                прием по <br />
                электронной <br />
                очереди
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    ),
  },
  {
    serviceID: 6,
    serviceName:
      'Полученные доходы и уплаченные налоги, сборы (пошлины). Получение информации из единого государственного регистра юридических лиц и индивидуальных предпринимателей',
    linkId: 2,
    uniqueName:
      'Выдача справки о доходах, исчисленных и удержанных суммах подоходного налога с физических лиц (п. 18.13) - для сотрудников (в т.ч бывших) Организации',
    maximumImplementationPeriod: 'в день подачи заявления',
    certificateValidityPeriod: 'действует бессрочно',
    boardSize: 'бесплатно',
    documents: 'паспорт или иной документ, удостоверяющий личность, либо их копии',
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
                руководитель группы ЦБ Дудковская И.А.,
                <br />
                бухгалтер ЦБ Нестерович И.М.,
                <br />
                бухгалтер ЦБ Сливкина О.О.,
                <br />
                бухгалтер ЦБ Михалко Л.И.
              </Td>
              <Td>
                тел. <a href={'tel:+375 (017) 299-28-07'}>+375 (017) 299-28-07</a>. <br />
                каб. 219,
              </Td>
              <Td>
                8:00-17:00 (пн.-чт.) <br />
                8:00-15:45 (пт.)
                <br />
                обед: 12:00-12:45;
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <h4>Филиал «ТБЗ Сергеевичское»</h4>
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
                начальник отдела бухгалтерского учета, анализа и планирования «ТБЗ «Сергеевичское»
                <br />
                Чернова О.И.
              </Td>
              <Td>
                {' '}
                <a href={'tel: +375 (017) 132-17-46'}>тел. +375 (017) 132-17-46</a>.
              </Td>
              <Td>
                8:00-17:00 (пн.-пт.)
                <br />
                обед: 12:00-13:00
              </Td>
            </Tr>
          </Tbody>
        </Table>
        <h4>Филиал «Бубны»</h4>
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
                главный бухгалтер филиала «Бубны»
                <br />
                Коляго И.А.
              </Td>
              <Td>
                <a href={'tel:+375 (017) 712-36-31'}>тел. +375 (017) 712-36-31</a>;
              </Td>
              <Td>
                8:00-17:00 (пн.-пт.)
                <br />
                обед: 12:00-13:00
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </div>
    ),
  },
];
