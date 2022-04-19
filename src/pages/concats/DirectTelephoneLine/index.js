import React from 'react';
import { PageSection, Table, Tbody, Td, Tr } from '../GeneralContactInform/styles';
import { Container } from '../../styles';
import Header from '../../../components/header';
import { Row } from '../styles';
import HeaderConcats from '../headerContacts';
import Footer from '../../../components/footer';

export default function PhoneLineServices() {
  return (
    <Container>
      <Header backgroundHeader={'blue'}></Header>
      <Row>
        <HeaderConcats></HeaderConcats>
        <PageSection>
          <Table>
            <Tbody>
              <Tr>
                <Td>Контакт-центр УП «МИНГАЗ»</Td>
                <Td>162</Td>
              </Tr>
              <Tr>
                <Td>График работы</Td>
                <Td>Кроме праздничных дней с 8.00 до 20.00</Td>
              </Tr>
              <Tr>
                <Td>Дополнительные телефоны</Td>
                <Td>
                  8017-299-28-40; <br />
                  8017-299-28-72; <br />
                  8017-299-29-17
                </Td>
              </Tr>
              <Tr>
                <Td>«Горячая линия»:</Td>
                <Td>
                  8017-299-28-70, <br />
                  пн.-чт. с 8:00 до 17:00, <br />
                  пт. с 8:00 до 15:45
                </Td>
              </Tr>
              <Tr>
                <Td>Круглосуточно</Td>
                <Td>8017-299-29-08</Td>
              </Tr>
            </Tbody>
          </Table>
        </PageSection>
      </Row>
      <Footer />
    </Container>
  );
}
