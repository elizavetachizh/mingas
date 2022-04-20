import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Requisites from '../requisites';
import SchedulePersonalReceptionOfCitizens from '../WorkSchedule';
import PhoneLineServices from '../DirectTelephoneLine';

import {
  ConcatsButton,
  DivButton,
  HeaderCompanyDiv,
  PhoneServicesButton,
  RequisitesButton,
  WorkScheduleButton,
} from './styles';
import GeneralInform from '../GeneralContactInform';

export default function HeaderConcats() {
  return (
    <HeaderCompanyDiv>
      <Routes>
        <Route path={'/contacts/requisites'} element={<Requisites />} />
        <Route path={'/contacts/work-schedule'} element={<SchedulePersonalReceptionOfCitizens />} />
        <Route path={'/contacts/phone-services'} element={<PhoneLineServices />} />
        <Route path="/contacts" element={<GeneralInform />} />
      </Routes>
      <DivButton>
        <ConcatsButton to="/contacts">Контактная информация</ConcatsButton>
        <WorkScheduleButton to="/contacts/work-schedule">
          График личного приёма граждан
        </WorkScheduleButton>
        <PhoneServicesButton to="/contacts/phone-services">
          Телефоны служб по работе с клиентами
        </PhoneServicesButton>
        {<RequisitesButton to="/contacts/requisites">Реквизиты предприятия</RequisitesButton>}
      </DivButton>
      {/*<hr style={hr} />*/}
    </HeaderCompanyDiv>
  );
}
