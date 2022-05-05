import React from 'react';
import {
  ConcatsButton,
  DivButton,
  HeaderCompanyDiv,
  PhoneServicesButton,
  RequisitesButton,
  WorkScheduleButton,
} from './styles';

export default function HeaderConcats() {
  return (
    <HeaderCompanyDiv>
      <DivButton>
        <ConcatsButton to="/contacts">Контактная информация</ConcatsButton>
        <WorkScheduleButton to="/contacts/work-schedule">
          График личного приёма граждан
        </WorkScheduleButton>
        <PhoneServicesButton to="/contacts/phone-services">
          Телефоны служб по работе с клиентами
        </PhoneServicesButton>
        <RequisitesButton to="/contacts/requisites">Реквизиты предприятия</RequisitesButton>
      </DivButton>
    </HeaderCompanyDiv>
  );
}
