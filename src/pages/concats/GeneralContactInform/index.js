import React, { useEffect, useState } from 'react';
import { PageSection, Table, Tbody, Tr, Td, AdditionalDiv } from './styles';
import Header from '../../../components/header';
import { ContactsInform, DivMap, Row } from '../styles';
import HeaderConcats from '../headerContacts';
import Footer from '../../../components/footer';
import { Container } from '../../styles';
import { defaultCenter, GetBrowserLocation } from '../../../components/GoogleMap/utilsGeo';
import TitleFun from '../../../components/title';
export const styleTd = {
  width: '50%',
  fontWeight: 'bold',
};

export default function GeneralInform() {
  const [center, setCenter] = useState(defaultCenter);
  useEffect(() => {
    GetBrowserLocation()
      .then((curLoc) => {
        setCenter(curLoc);
      })
      .catch((defaultLocation) => {
        setCenter(defaultLocation);
      });
  }, []);
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={'АППАРАТ УПРАВЛЕНИЯ УП "МИНГАЗ"'} />
        <Row>
          <HeaderConcats />
          <ContactsInform>
            <PageSection>
              <Table>
                <Tbody>
                  <Tr>
                    <Td style={styleTd}>Адрес</Td>
                    <Td>220037, г.Минск, ул.Ботаническая, 11/1</Td>
                  </Tr>
                  <Tr>
                    <Td style={styleTd}>Телефон (приёмная руководителя)</Td>
                    <Td>(017) 299-28-80</Td>
                  </Tr>
                  <Tr>
                    <Td style={styleTd}>E-mail</Td>
                    <Td>root@mingas.by</Td>
                  </Tr>
                  <Tr>
                    <Td style={styleTd}>Факс</Td>
                    <Td>(017) 366-36-33</Td>
                  </Tr>
                </Tbody>
              </Table>
            </PageSection>
          </ContactsInform>
        </Row>
        <DivMap>
          <div style={{ position: 'relative', overflow: 'hidden' }}>
            <a
              href="https://yandex.by/maps/org/mingaz/41119693302/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px' }}
            >
              Мингаз
            </a>
            <a
              href="https://yandex.by/maps/157/minsk/category/gas_supply_services/184108297/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px' }}
            >
              Служба газового хозяйства в Минске
            </a>
            <a
              href="https://yandex.by/maps/157/minsk/category/municipal_housing_authority/184108301/?utm_medium=mapframe&utm_source=maps"
              style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '28px' }}
            >
              Коммунальная служба в Минске
            </a>
            <iframe
              src="https://yandex.by/map-widget/v1/-/CCURMME-DA"
              frameBorder="1"
              allowFullScreen="true"
              style={{ position: 'relative' }}
            ></iframe>
          </div>
        </DivMap>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
