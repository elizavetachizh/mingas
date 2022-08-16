import React from 'react';
import { AdditionalDiv, PageSection } from '../GeneralContactInform/styles';
import { Container } from '../../styles';
import Header from '../../../components/header';
import { Row } from '../styles';
import HeaderConcats from '../headerContacts';
import Footer from '../../../components/footer';
import { styleTd } from '../GeneralContactInform';
import TitleFun from '../../../components/title';
import { Table, Tbody } from '../../feedback/receptionOfCitizens/styles';

export default function PhoneLineServices() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'Телефоны служб по работе с клиентами'} />
        <Row>
          <HeaderConcats />
          <PageSection>
            <Table style={{ height: '100%', margin: 'auto 0' }}>
              <Tbody>
                <tr>
                  <td style={styleTd}>Контакт-центр УП «МИНГАЗ»</td>
                  <td>162</td>
                </tr>
                <tr>
                  <td style={styleTd}>График работы</td>
                  <td>Кроме праздничных дней с 8.00 до 20.00</td>
                </tr>
                <tr>
                  <td style={styleTd}>«Горячая линия»:</td>
                  <td>
                    8017-299-28-70, <br />
                    пн.-чт. с 8:00 до 17:00, <br />
                    пт. с 8:00 до 15:45
                  </td>
                </tr>
                <tr>
                  <td style={styleTd}>Круглосуточно</td>
                  <td>8017-299-29-08</td>
                </tr>
              </Tbody>
            </Table>
          </PageSection>
        </Row>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
