import React from 'react';
import { HeaderCompanyDiv, DivButton, HeaderCompanyBtn } from './styles';
import Header from '../../../components/header';
import { t } from 'i18next';

export default function HeaderCompany() {
  return (
    <HeaderCompanyDiv>
      <Header />
      <DivButton>
        <HeaderCompanyBtn to="/company/history">
          {t('headerCompany:companyHistory')}
        </HeaderCompanyBtn>
        <HeaderCompanyBtn to="/company/management">
          {t('headerCompany:management')}
        </HeaderCompanyBtn>
        <HeaderCompanyBtn to="/company/career">{t('headerCompany:careerMingaz')}</HeaderCompanyBtn>
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
