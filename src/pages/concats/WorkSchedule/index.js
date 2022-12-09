import React from 'react';
import { Row, Text } from '../styles';
import HeaderConcats from '../headerContacts';
import ReceptionSchedule from '../../../components/ReceptionSchedule';
import ContainerContent from '../../../components/Container';

export default function SchedulePersonalReceptionOfCitizens() {
  return (
    <ContainerContent
      name={'График приёма граждан'}
      content={
        <>
          <Row>
            <HeaderConcats />
            <ReceptionSchedule />
          </Row>
          <Text>
            <h4>
              Справочно: прямая телефонная линия проводится каждую последнюю пятницу месяца с 11.00
              до 12.00 по телефону <a href={"tel:299 28 80"}>299 28 80</a>.
            </h4>
          </Text>
        </>
      }
    />
  );
}
