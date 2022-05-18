import React from 'react';
import { Container } from '../../Home/styles';
import Header from '../../../components/header';
import { Body } from './styles';
import { Title } from '../../Home/useful_information/styles';
import ButtonFun from '../../../components/button';
import HeaderConcats from "../../concats/headerContacts";
import { ContactsInform, Row } from "../../concats/styles";
import { PageSection, Table, Tbody, Td, Tr } from "../../concats/GeneralContactInform/styles";
import { styleTd } from "../../concats/GeneralContactInform";
const red = {
  color: 'red'
}
export default function Tasks() {
  return (
    <Container>
      <Header backgroundHeader={'blue'}></Header>

      <Body>
        <Title>Виды работ</Title>
        <div>
          <input type={'radio'} />
          <label htmlFor="contactChoice1">Выезд без выполнения работ</label>
        </div>

        <div>
          <input type={'radio'} />
          <label htmlFor="contactChoice1">Диагностика отопительных котлов</label>
        </div>
        <div>
          <input type={'radio'} />
          <label htmlFor="contactChoice1">Диагностика газовых плит</label>
        </div>

        <div>
          <input type={'radio'} />
          <label htmlFor="contactChoice1">Замена шланга</label>
        </div>

        <div>
          <input type={'radio'} />
          <label htmlFor="contactChoice1">Замена крана</label>
        </div>

        <div>
          <input type={'radio'} />
          <label htmlFor="contactChoice1">Отключение газового котла</label>
        </div>
        <div>
          <input type={'radio'} />
          <label htmlFor="contactChoice1">Отключение газовой колонки</label>
        </div>

        <div>
          <input type={'radio'} />
          <label htmlFor="contactChoice1">Отключение плиты газовой</label>
        </div>
      </Body>
      <Body>
        <Title>Задачи</Title>
        <h4>Дата: 18.05.2022</h4>
        <p>Количество задач: 2</p>
        <ul>
          <li>
            <div>
              <input type={'checkbox'} />
              <p>Время: 09:00-17:00</p>
            </div>
            <p>г. Минск Проспект Победителей 124, кв. 12</p>
            <p>Снятие ИПУРГ в поверку</p>
          </li>
          <li>
            <div>
              <input type={'checkbox'} />
              <p>Время: 12:00-17:00</p>
            </div>
            <p>г. Минск Уральская улица, кв. 1</p>
            <p>Ремонт энергозависимых котлов</p>
          </li>
        </ul>
        <ButtonFun infoButton={'Принять'} backgroundColor={'gray'} href={'/'} />
      </Body>
      <Body>
        <Title>Итогавая информация за один день</Title>
        <h4>Дата: 22.05.2022</h4>
        <h4>Сотрудник: Михневич Вячаслав Витальевич</h4>
        <Row>
          <ContactsInform>
            <PageSection>
              <Table>
                <Tbody>
                  <Tr>
                    <Td style={styleTd}>Вид работы</Td>
                    <Td style={styleTd}>Адрес</Td>
                    <Td style={styleTd}>Статус</Td>

                  </Tr>
                  <Tr>
                    <Td>Выезд без выполнения работ</Td>
                    <Td>Пр. Победителей 124, кв. 7...</Td>
                    <Td>Выполнено</Td>
                  </Tr>
                  <Tr>
                    <Td>Замена шланга</Td>
                    <Td>ул. Филимонова 10, кв. 15...</Td>
                    <Td>Выполнено</Td>
                  </Tr>
                  <Tr>
                    <Td>Выезд без выполнения работ</Td>
                    <Td>ул. Ботаническая 3, кв. 67...</Td>
                    <Td style={red}>Не выполнено</Td>
                  </Tr>
                </Tbody>
              </Table>
            </PageSection>
          </ContactsInform>
        </Row>
      </Body>
    </Container>
  );
}
