import React from 'react';
import { DivButton, HeaderCompanyDiv } from '../../company/header_company/styles';
import { ConcatsButton } from '../../concats/headerContacts/styles';
import { NavLink } from 'react-router-dom';
import { FeedBackButton } from '../../../components/header/mobileNavigation/styles';

export default function HeaderFeedBack() {
  return (
    <HeaderCompanyDiv>
      <DivButton>
        <ConcatsButton to="/contacts">Онлайн-заявка</ConcatsButton>
        <NavLink to="/contacts/work-schedule">Обращение граждан</NavLink>
        <NavLink to="/contacts/phone-services">Вопрос-ответ</NavLink>
        <FeedBackButton to="/feedback/reception-of-citizens">Приём граждан</FeedBackButton>
        <NavLink to="/contacts/requisites">Полезная информация</NavLink>
      </DivButton>
    </HeaderCompanyDiv>
  );
}
