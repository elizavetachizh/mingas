import { Table, Tbody, ContainerTable } from '../../pages/feedback/receptionOfCitizens/styles';
import React, { useCallback, useEffect, useState } from 'react';
import Modal from '../modalWindow';
import DopFunctionalForColumn from '../../pages/feedback/receptionOfCitizens/DopFunctionalForColumn';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { API } from '../../backend';

export default function ReceptionSchedule() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLeader, setCurrentLeader] = useState({});
  const [nameId, setNameId] = useState(null);
  const handlerLeaderClick = useCallback((leader) => {
    setModalVisible(true);
    setCurrentLeader(leader);
    setNameId(leader._id);
  }, []);
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/management`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  return (
    <ContainerTable>
      <Table className={'firstColumn'}>
        <thead style={{ height: '45px', textAlign: 'center' }}>
          <tr>
            <th>ФИО</th>
          </tr>
        </thead>
        <Tbody className={'firstColumn'}>
          {info.map((el) => {
            if (
              el.fullName !== 'Манкевич Екатерина Васильевна' &&
              el.fullName !== 'Ганзя Андрей Михайлович'
            ) {
              return (
                <tr key={el.id}>
                  <td>
                    <DopFunctionalForColumn
                      handlerLeaderClick={handlerLeaderClick}
                      fullName={el.fullName}
                      idName={el._id}
                      leader={el}
                      position={el.position}
                    />
                  </td>
                </tr>
              );
            }
          })}
          <tr>
            <td>
              <NavLink
                to={
                  '/company/management/6384589d39dd2976eec5c13b?id=Производственно-техническое%20управление%20(ПТУ)'
                }
              >
                Яскевич Виталий Владимирович
              </NavLink>
              <br />
              <p>Начальник производственно-технического управления</p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/638458ac39dd2976eec5c14e?id=Служба%20заказчика'}>
                Курленя Виталий Алексеевич
              </NavLink>
              <br />
              <p>Начальник службы заказчика</p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink
                to={'/company/management/638458ac39dd2976eec5c14e?id=Контакт%20центр%20(КЦ)'}
              >
                Безмен Алексей Валерьевич
              </NavLink>
              <br />
              <p>Начальник Контакт центра</p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink
                to={
                  '/company/management/638458ac39dd2976eec5c14e?id=Служба%20эксплуатации%20внутридомовых%20объектов%20газопотребления%20(СЭВОГ)'
                }
              >
                Рашев Евгений Алексеевич
              </NavLink>
              <br />
              <p>Начальник службы эксплуатации внутридомовых объектов газопотребления</p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/2?id=8'}>Боровой Михаил Эдуардович</NavLink>
              <br />
              <p>Начальник транспортной службы</p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/2?id=9'}>Веренич Артем Сергеевич</NavLink>
              <br />
              <p>Начальник службы эксплуатации объектов газораспределительной системы</p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink
                to={
                  '/company/management/63845ae4db3ae3ea77af1656?id=Служба%20учёта%20потреблённого%20газа%20населением%20(СУПГН)'
                }
              >
                Пятница Александр Владимирович
              </NavLink>
              <br />
              <p>Начальник службы учета потребленного газа населением</p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink
                to={
                  '/company/management/63845ae4db3ae3ea77af1656?id=Филиал%20по%20производству%20сельскохозяйственной%20продукции%20“Бубны”'
                }
              >
                Романюк Алексей Николавеич
              </NavLink>
              <br />
              <p>Директор сельскохозяйственного филиала «Бубны»</p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink
                to={
                  '/company/management/63845ae4db3ae3ea77af1656?id=Филиал%20«Торфобрикетный%20завод%20«Сергеевичское»'
                }
              >
                Молочко Алексей Александрович
              </NavLink>
              <br />
              <p>Директор филиала «Торфобрикетный завод «Сергеевичское»</p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/2'}> Горбач Марина Владимировна</NavLink>
              <br />
              <p>
                Начальник участка № 1 службы эксплуатации внутридомовых объектов газопотребления
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/3'}>Канапацкая Юлия Петровна</NavLink>
              <br />
              <p>
                Начальник участка № 2 службы эксплуатации внутридомовых объектов газопотребления
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/4'}>Пашинь Татьяна Владимировна</NavLink>
              <br />{' '}
              <p>
                Начальник участка № 3 службы эксплуатации внутридомовых объектов газопотребления
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/1'}>
                Савченко Александр Константинович
              </NavLink>
              <br />
              <p>
                Начальник сервисного центра службы эксплуатации объектов газораспределительной
                системы
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/6'}>Казимирчик Татьяна Евгеньевна</NavLink>
              <br />
              <p>
                Начальник участка организации начислений и контроля поступления оплат службы учета
                потребленного газа населением
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <NavLink to={'/company/management/division/7'}>Раковский Евгений Дмитриевич</NavLink>
              <br />
              <p>
                Начальник участка организации ремонта и поверки бытовых счетчиков газа службы учета
                потребленного газа населением
              </p>
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
              <p>1-я среда месяца 08.00-12.00</p>
              <p>3-я среда месяца 16.00-20.00</p>
              <p>Выездной прием – ежеквартально</p>
              <p style={{ color: 'red' }}>
                Прием запланированный на 05.07.2023 состоится 06.07.2023
              </p>
              <br />
              <p>каб.101 г. Минск, ул. Ботаническая 11/1</p>
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
              <p>2-й вторник месяца 08.00-12.00 </p>
              <p>4-й вторник месяца 16.00-20.00</p>
              <p>Выездной прием – ежеквартально</p>
              <br />
              <p>каб.230 г. Минск, ул. Ботаническая 11/1</p>
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
              <p>1-й четверг месяца 08.00-12.00</p>
              <br />
              <p>Выездной прием – ежеквартально</p>
              <br />
              <p> каб.220 г. Минск, ул. Ботаническая 11/1</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 28 69</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>1-я среда месяца 08.00-12.00</p> <br />
              <p> каб.236 г. Минск, ул. Ботаническая 11/1</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 29 29</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-я среда месяца 08.00-12.00</p>
              <p>каб. 230 г. Минск, ул. Ботаническая 11/1</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 28 80</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-я среда месяца 08.00-12.00</p>
              <p> 08.00-12.00 каб. 238</p>
              {/*<br />*/}
              {/*<p>1-я среда месяца филиал «Бубны»</p>*/}
              {/*<p>2-я среда месяца филиал «ТБЗ «Сергеевичское»</p>*/}
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 28 16</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>

          <tr>
            <td>
              <p>1-й вторник месяца 08.00-12.00</p>
              <br /> <p>каб. 220 г. Минск, ул. Ботаническая 11/1</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 299 28 69</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>1-я среда месяца 08.00-12.00</p>
              <br /> <p>каб. 115 г. Минск, ул. Ботаническая 11/1</p>
            </td>
            <td>
              <p>
                Предварительная запись на прием осуществляется по тел. 299 29 26, тел. 299 28 69
              </p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-й вторник месяца 16.00-20.00</p>
              <br /> <p>каб. 115 г. Минск, ул. Ботаническая 11/1</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 29 18</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-я среда месяца 15.00-18.00</p>
              <br /> <p>каб. 115 г. Минск, ул. Ботаническая 11/1</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 299 28 70</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-я среда месяца 08.00-12.00</p>
              <p>4-я среда месяца 16.00-20.00</p>
              <p>Выездной прием на произв. участках – ежеквартально</p> <br />
              <p>каб. 311 г. Минск, ул. Ботаническая 11/1</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 28 29</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>4-й вторник месяца 08.00-12.00</p>
              <br />
              <p>каб. 115 г. Минск, ул. Ботаническая 11/1</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.512 46 95</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>1-й вторник месяца 08.00-12.00</p> <br />
              <p>каб. 115 г. Минск, ул. Ботаническая 11/1</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 29 42</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p> 1-я среда месяца 08.00-12.00</p>
              <p> 3-я среда месяца 16.00-20.00</p> <p>каб. 117 г. Минск, ул. Ботаническая 11/1</p>
            </td>

            <td>
              <p>Предварительная запись на прием осуществляется по тел.299 28 20</p>
              <p>понедельник-четверг: с 8.00 до 17.00,</p> <p>пятница: с 08.00 до 15.45</p>
              <p>обеденный перерыв с 12.00 до 12.45</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>1-я среда месяца 16.00-20.00</p>
              <br />
              <p>Административное здание филиала «Бубны»</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.8 017 71 23 607</p>
              <p>Понедельник-пятница: с 8.00 до 17.00, обеденный перерыв с 12.00 до 13.00</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-й четверг месяца 08.00-12.00</p> <br />
              <p>Административное здание филиала «Торфобрикетный завод «Сергеевичское»</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел.8 017 13 20 151</p>
              <p>Понедельник-пятница: с 8.00 до 17.00, обеденный перерыв с 12.00 до 13.00</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-й вторник месяца 08.00-12.00</p>
              <br />
              <p>4-й вторник месяца 16.00-20.00</p>
              <br />
              <p>г. Минск, ул.Плеханова, д.3</p>
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
              <p> 2-й вторник месяца 08.00-12.00</p>
              <br />
              <p> 4-й вторник месяца 16.00-20.00</p>
              <br />
              <p>г. Минск, ул. Матусевича, д.84</p>
            </td>
            <td>
              <p>Предварительная запись на прием осуществляется по тел. 224 02 87</p>
              <p>
                Понедельник-пятница: с 8.00 до 17.00, <br />
                пятница: с 08.00 до 15.45 <br />
                обеденный перерыв с 12.00 до 12.45
              </p>
            </td>
          </tr>
          <tr>
            <td>
              <p>2-й вторник месяца 08.00-12.00</p> <br />
              <p>4-й вторник месяца 16.00-20.00</p> <br />
              <p>г. Минск, ул.Л.Беды,д.8</p>
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
              <p> 2-й понедельник месяца 08.00-12.00</p>
              <br />
              <p> 4-й понедельник месяца 16.00-20.00</p>
              <br />
              <a
                href={'https://goo.gl/maps/gxxbY2quJ3cZxp6L8'}
                target={'_blank'}
                rel="noreferrer"
                style={{ color: '#0d4475' }}
              >
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
              <p>2-й вторник месяца 08.00-12.00</p>
              <br />
              <p>4-й вторник месяца 16.00-20.00</p>
              <br />
              <p>каб. 117 г. Минск, ул. Ботаническая 11/1</p>
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
              <p>1-й вторник месяца 08.00-12.00</p>
              <br />
              <p>3-й вторник месяца 16.00-20.00</p>
              <br />
              <p>каб. 117 г. Минск, ул. Ботаническая 11/1</p>
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
