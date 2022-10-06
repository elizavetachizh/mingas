import React from 'react';
import { PageSection } from '../GeneralContactInform/styles';
import { DivMap, Row } from '../styles';
import HeaderConcats from '../headerContacts';
import { Table, Tbody } from '../../feedback/receptionOfCitizens/styles';
import ContainerContent from '../../../components/Container';

export default function PhoneLineServices() {
  return (
    <ContainerContent
      name={'Основная информация'}
      content={
        <>
          <Row>
            <HeaderConcats width={'s'} />
            <PageSection>
              <Table style={{ height: '70%', margin: 'auto 0' }}>
                <Tbody className={'general'}>
                  <tr>
                    <td>Контакт-центр УП «МИНГАЗ»</td>
                    <td>162</td>
                  </tr>
                  <tr>
                    <td>График работы</td>
                    <td>Кроме праздничных дней с 8.00 до 20.00</td>
                  </tr>
                  <tr>
                    <td>«Горячая линия»:</td>
                    <td>
                      8017-299-28-70, <br />
                      пн.-чт. с 8:00 до 17:00, <br />
                      пт. с 8:00 до 15:45
                    </td>
                  </tr>
                  <tr>
                    <td>Круглосуточно</td>
                    <td>8017-299-29-08</td>
                  </tr>
                </Tbody>
              </Table>
            </PageSection>
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
                title={'карта'}
                src="https://yandex.by/map-widget/v1/-/CCURMME-DA"
                allowFullScreen={true}
                style={{ position: 'relative' }}
              />
            </div>
          </DivMap>
        </>
      }
    />
  );
}
