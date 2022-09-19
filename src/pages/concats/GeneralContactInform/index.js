import React, { useEffect, useState } from 'react';
import Header from '../../../components/header';
import { ContactsInform, DivMap, Row } from '../styles';
import HeaderConcats from '../headerContacts';
import Footer from '../../../components/footer';

import { defaultCenter, GetBrowserLocation } from '../../../components/GoogleMap/utilsGeo';
import TitleFun from '../../../components/title';
import { AdditionalDiv } from './styles';
import { Table, Tbody } from '../../feedback/receptionOfCitizens/styles';
import { Container } from '../../company/styles';
export const styleTd = {
  width: '50%',
  fontWeight: 'bold',
};

export default function GeneralInform() {
  const [center, setCenter] = useState(defaultCenter);

  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Table>
              <Tbody className={'general'}>
                <tr>
                  <td style={styleTd}>Адрес</td>
                  <td>220037, г.Минск, ул.Ботаническая, 11/1</td>
                </tr>
                <tr>
                  <td style={styleTd}>Телефон (приёмная руководителя)</td>
                  <td>(017) 299-28-80</td>
                </tr>
                <tr>
                  <td style={styleTd}>E-mail</td>
                  <td>root@mingas.by</td>
                </tr>
                <tr>
                  <td style={styleTd}>Факс</td>
                  <td>(017) 366-36-33</td>
                </tr>
              </Tbody>
            </Table>
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
              allowFullScreen="true"
              style={{ position: 'relative' }}
            />
          </div>
        </DivMap>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
