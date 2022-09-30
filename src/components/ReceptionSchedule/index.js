import { Table, Tbody, ContainerTable } from '../../pages/feedback/receptionOfCitizens/styles';
import React, { useCallback, useState } from 'react';
import Modal from '../modalWindow';
import { admissionSchedule } from '../../assets/data/admissionSchedule';
import DopFunctionalForColumn from '../../pages/feedback/receptionOfCitizens/DopFunctionalForColumn';
import { NavLink } from 'react-router-dom';

export default function ReceptionSchedule() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLeader, setCurrentLeader] = useState({});
  const [nameId, setNameId] = useState(null);
  const handlerLeaderClick = useCallback((leader) => {
    setModalVisible(true);
    setCurrentLeader(leader);
    setNameId(leader.id);
  }, []);
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <ContainerTable>
      <Table className={'firstColumn'}>
        <thead style={{ height: '45px', textAlign: 'center' }}>
          <tr>
            <th>ФИО</th>
          </tr>
        </thead>
        <Tbody className={'firstColumn'}>
          {admissionSchedule.map((el) => (
            <tr>
              <td>
                <DopFunctionalForColumn
                  handlerLeaderClick={handlerLeaderClick}
                  fullName={el.fullName}
                  idName={el.id}
                  leader={el}
                  position={el.position}
                />
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <NavLink to={'/company/management/2?id=5'}> Яскевич Виталий Владимирович</NavLink>
              <br />
              Начальник производственно-технического управления
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/5?id=24'}>Курленя Виталий Алексеевич</NavLink>
              <br />
              Начальник службы заказчика
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/3?id=18'}>Безмен Алексей Валерьевич</NavLink>
              <br />
              Начальник Контакт центра
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/3?id=13'}>Рашев Евгений Алексеевич</NavLink>
              <br />
              Начальник службы эксплуатации внутридомовых объектов газопотребления
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/2?id=8'}>Краснощекий Яков Александрович</NavLink>
              <br />
              Начальник транспортной службы
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/2?id=9'}>Веренич Артем Сергеевич</NavLink>
              <br />
              Начальник службы эксплуатации объектов газораспределительной системы
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/3?id=17'}>Пятница Александр Владимирович</NavLink>
              <br />
              Начальник службы учета потребленного газа населением
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/7?id=32'}>Белокурский Владимир Петрович</NavLink>
              <br />
              Первый заместитель директора - главный инженер сельскохозяйственного филиала «Бубны»
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/7?id=31'}>Молочко Алексей Александрович</NavLink>
              <br />
              Директор филиала «Торфобрикетный завод «Сергеевичское»
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/2'}> Горбач Марина Владимировна</NavLink>
              <br />
              Начальник участка № 1 службы эксплуатации внутридомовых объектов газопотребления
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/3'}>Канапацкая Юлия Петровна</NavLink>
              <br />
              Начальник участка № 2 службы эксплуатации внутридомовых объектов газопотребления
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/4'}>Пашинь Татьяна Владимировна</NavLink>
              <br /> Начальник участка № 3 службы эксплуатации внутридомовых объектов
              газопотребления
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/1'}>
                {' '}
                Савченко Александр Константинович
              </NavLink>
              <br />
              Начальник сервисного центра службы эксплуатации объектов газораспределительной системы
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/6'}>Казимирчик Татьяна Евгеньевна</NavLink>
              <br />
              Начальник участка организации начислений и контроля поступления оплат службы учета
              потребленного газа населением
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/7'}>Раковский Евгений Дмитриевич</NavLink>
              <br />
              Начальник участка организации ремонта и поверки бытовых счетчиков газа службы учета
              потребленного газа населением
            </td>
          </tr>
        </Tbody>
      </Table>
      <Table>
        <thead style={{ height: '45px', textAlign: 'center' }}>
          <tr>
            <th>График приёма граждан</th>
            <th>Порядок записи на прием</th>
          </tr>
        </thead>
        <Tbody>
          <tr>
            <td>
              <p>1-я среда месяца 08.00-12.00 каб.113</p>
              <p>3-я среда месяца 16.00-20.00 каб.113</p>
              <p>Выездной прием – ежеквартально</p>
            </td>
            <td>
              <p>
                Предварительная запись на прием осуществляется по тел.299 28 80 (приемная
                руководителя)
              </p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-й вторник месяца 08.00-12.00 каб.230</p>
              <p>4-й вторник месяца 16.00-20.00 каб.230</p>
              <p>Выездной прием – ежеквартально</p>
            </td>
            <td>
              <p>
                Предварительная запись на прием осуществляется по тел.299 28 80 (приемная
                руководителя)
              </p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-я среда месяца 08.00-12.00 каб.233</p>
              <p>Выездной прием – ежеквартально</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 28 56</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>1-я среда месяца 08.00-12.00 каб.236</td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 29 29</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>
                2-я среда месяца 08.00-12.00 <br />
                Административное здание Филиала «Бубны»
              </p>
              <p>Выездной прием – ежеквартально</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 28 16</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>1-й вторник месяца 08.00-12.00 каб.235</td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 28 80</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>1-й четверг месяца 08.00-12.00 каб.220</td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 299 28 69</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>1-я среда месяца 08.00-12.00</td>
            <td>
              <p>
                Предварительная запись на прием осуществляется по тел. 299 29 26, тел. 299 28 69
              </p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>2-й вторник месяца 16.00-20.00</td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 29 18</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>2-я среда месяца 15.00-18.00</td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 299 28 70</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-я среда месяца 08.00-12.00 каб.311</p>
              <p>4-я среда месяца 16.00-20.00 каб.311</p>
              <p>Выездной прием на произв. участках – ежеквартально</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 28 29</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>4-я среда месяца 08.00-12.00</td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.512 46 95</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>1-й вторник месяца 08.00-12.00</td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 29 42</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              1-я среда месяца 08.00-12.00<p> 3-я среда месяца 16.00-20.00</p>
            </td>

            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 28 20</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>1-я среда месяца 16.00-20.00</td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.8 017 71 23 607</p>
              <p>Понедельник-пятница: с 8.00 до 17.00, обеденный перерыв с 12.00 до 13.00</p>
            </td>
          </tr>
          <tr>
            <td>2-й четверг месяца 08.00-12.00</td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.8 017 13 20 151</p>
              <p>Понедельник-пятница: с 8.00 до 17.00, обеденный перерыв с 12.00 до 13.00</p>
            </td>
          </tr>
          <tr>
            <td>
              2-й четверг месяца 08.00-12.00
              <br />
              4-й вторник месяца 16.00-20.00
              <br />
              ул.Плеханова, д.3
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 299 28 29</p>
              <p>
                Понедельник-пятница: с 8.00 до 17.00, <br />
                пятница: с 08.00 до 15.45 <br />
                обеденный перерыв с 12.00 до 12.45
              </p>
            </td>
          </tr>
          <tr>
            <td>
              2-й четверг месяца 08.00-12.00
              <br />
              4-й вторник месяца 16.00-20.00
              <br />
              ул.Л.Беды,д.8
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 370 66 15</p>
              <p>
                Понедельник-пятница: с 8.00 до 17.00, <br />
                пятница: с 08.00 до 15.45 <br />
                обеденный перерыв с 12.00 до 12.45
              </p>
            </td>
          </tr>
          <tr>
            <td>
              2-й вторник месяца 08.00-12.00 <br />
              4-й вторник месяца 16.00-20.00 <br />
              ул.Л.Беды,д.8
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 370 66 15</p>
              <p>
                Понедельник-пятница: с 8.00 до 17.00, <br />
                пятница: с 08.00 до 15.45 <br />
                обеденный перерыв с 12.00 до 12.45
              </p>
            </td>
          </tr>
          <tr>
            <td>
              2-й понедельник месяца 08.00-12.00
              <br />
              4-й понедельник месяца 16.00-20.00
              <br />
              <a href={'https://goo.gl/maps/gxxbY2quJ3cZxp6L8'} target={'_blank'} rel="noreferrer">
                д.Большой Тростенец, ул.Центральная, 41/1
              </a>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 345 89 56</p>
              <p>
                Понедельник-пятница: с 8.00 до 17.00, <br />
                пятница: с 08.00 до 15.45 <br />
                обеденный перерыв с 12.00 до 12.45
              </p>
            </td>
          </tr>
          <tr>
            <td>
              2-й вторник месяца 08.00-12.00
              <br />
              4-й вторник месяца 16.00-20.00
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 299 28 20</p>
              <p>
                Понедельник-пятница: с 8.00 до 17.00, <br />
                пятница: с 08.00 до 15.45 <br />
                обеденный перерыв с 12.00 до 12.45
              </p>
            </td>
          </tr>
          <tr>
            <td>
              1-й вторник месяца 08.00-12.00
              <br />
              3-й вторник месяца 16.00-20.00
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 299 28 20</p>
              <p>
                Понедельник-пятница: с 8.00 до 17.00, <br />
                пятница: с 08.00 до 15.45 <br />
                обеденный перерыв с 12.00 до 12.45
              </p>
            </td>
          </tr>
        </Tbody>
      </Table>
      {isModalVisible && (
        <Modal handleCloseCLick={handleCloseCLick} currentLeader={currentLeader} nameId={nameId} />
      )}
    </ContainerTable>
  );
}
