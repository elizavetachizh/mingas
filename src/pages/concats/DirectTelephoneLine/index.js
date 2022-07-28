import React from 'react';
import { AdditionalDiv, PageSection, Table, Tbody, Td, Tr } from '../GeneralContactInform/styles';
import { Container } from '../../styles';
import Header from '../../../components/header';
import { Row } from '../styles';
import HeaderConcats from '../headerContacts';
import Footer from '../../../components/footer';
import { Title } from '../../Home/useful_information/styles';
import { styleTd } from '../GeneralContactInform';
import TitleFun from '../../../components/title';

export default function PhoneLineServices() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Телефоны служб по работе с клиентами'} />
        <Row>
          <HeaderConcats />
          <PageSection>
            <Table>
              <Tbody>
                <Tr>
                  <Td style={styleTd}>Контакт-центр УП «МИНГАЗ»</Td>
                  <Td>162</Td>
                </Tr>
                <Tr>
                  <Td style={styleTd}>График работы</Td>
                  <Td>Кроме праздничных дней с 8.00 до 20.00</Td>
                </Tr>
                <Tr>
                  <Td style={styleTd}>«Горячая линия»:</Td>
                  <Td>
                    8017-299-28-70, <br />
                    пн.-чт. с 8:00 до 17:00, <br />
                    пт. с 8:00 до 15:45
                  </Td>
                </Tr>
                <Tr>
                  <Td style={styleTd}>Круглосуточно</Td>
                  <Td>8017-299-29-08</Td>
                </Tr>
              </Tbody>
            </Table>
          </PageSection>
        </Row>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
