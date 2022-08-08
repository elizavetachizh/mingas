import React from 'react';
import { HeaderCompanyDiv, DivButton, HeaderCompanyBtn } from './styles';
import { t } from 'i18next';

export default function HeaderCompany() {
  return (
    <HeaderCompanyDiv>
      <DivButton>
        <HeaderCompanyBtn to="/company/history">
          {t('headerCompany:companyHistory')}
        </HeaderCompanyBtn>
        <HeaderCompanyBtn to="/company/management">
          {t('headerCompany:management')}
        </HeaderCompanyBtn>
        <HeaderCompanyBtn to="/company/career">Работа в УП "МИНГАЗ"</HeaderCompanyBtn>
        <HeaderCompanyBtn to="/company/parent-organizations">
          Вышестоящие организации
        </HeaderCompanyBtn>
        <HeaderCompanyBtn to="/company/branches">Филиалы УП "Мингаз"</HeaderCompanyBtn>
        <HeaderCompanyBtn to="/company/documentation">
          {t('headerCompany:documentation')}
        </HeaderCompanyBtn>
        <HeaderCompanyBtn to="/company/gratitude">Благодарности и награды</HeaderCompanyBtn>
      </DivButton>
      <hr />
    </HeaderCompanyDiv>
  );
}
