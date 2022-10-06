import React from 'react';
import { Row } from '../styles';
import HeaderConcats from '../headerContacts';
import ReceptionSchedule from '../../../components/ReceptionSchedule';
import ContainerContent from '../../../components/Container';

export default function SchedulePersonalReceptionOfCitizens() {
  return (
    <ContainerContent
      name={'График приёма граждан'}
      content={
        <Row>
          <HeaderConcats />
          <ReceptionSchedule />
        </Row>
      }
    />
  );
}
