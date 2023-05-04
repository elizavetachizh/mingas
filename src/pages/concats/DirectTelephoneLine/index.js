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
                    <td>
                      <a style={{ fontWeight: 'bold', fontSize:'22px' }} href={'tel:162'}>
                        162
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>График работы центра обслуживания населения</td>
                    <td>
                      г. Минск, ул. Ботаническая, 11/1, вход №2
                      ежедневно с 8.00 до 20.00, кроме праздничных дней <br/>
                      г. Заславль, ул. Советская, 79
                      9.00-18.00 (пн-чт и 3-я суббота месяца), 9.00-16.45 (пт.), обед: 13.00-13.45

                    </td>
                  </tr>
                  <tr>
                    <td>«Горячая линия»</td>
                    <td>
                      <a href={'tel:+375(017)-299-28-70'}> +375(017)-299-28-70</a>,
                      круглосуточно
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Прямая телефонная линия проводится каждую <br /> последнюю пятницу месяца с
                      11.00 до 12.00
                    </td>
                    <td>
                      <a href={'tel:8017-299 28 80'}>+375(017)-299-28-80</a>
                    </td>
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
