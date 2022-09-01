import React from 'react';
import {HeaderCompanyDiv, HeaderConcatsBtn } from './styles';
import { Name } from '../../../components/administrativeServices/Header/styles';

export default function HeaderConcats({width}) {
  return (
    <HeaderCompanyDiv width={width}>
      <Name>Контактная информация</Name>
      {/*<HeaderConcatsBtn to="/contacts">Общая информация</HeaderConcatsBtn>*/}
      <HeaderConcatsBtn to="/contacts/work-schedule">
        График личного приёма граждан
      </HeaderConcatsBtn>
      <HeaderConcatsBtn to="/contacts/phone-services">
        Телефоны служб по работе с клиентами
      </HeaderConcatsBtn>
      <HeaderConcatsBtn to="/contacts/requisites">Реквизиты предприятия</HeaderConcatsBtn>
    </HeaderCompanyDiv>
  );
}
