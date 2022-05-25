import React from 'react';
import {
  HeaderCompanyDiv,
  HistoryButton,
  ManagementButton,
  StructureButton,
  CareerButton,
  DocumentsButton,
  UnionButton,
  DivButton,
} from './styles';
import Header from '../../../components/header';
import { t } from 'i18next';

export default function HeaderCompany() {
  return (
    <HeaderCompanyDiv>
      <Header />
      <DivButton>
        <HistoryButton to="/company/history">{t('headerCompany:companyHistory')}</HistoryButton>
        <ManagementButton to="/company/management">
          {t('headerCompany:management')}
        </ManagementButton>
        <StructureButton to="/company/structure">
          {t('headerCompany:enterpriseStructure')}
        </StructureButton>
        <CareerButton to="/company/career">{t('headerCompany:careerMingaz')}</CareerButton>
        <DocumentsButton to="/company/documentation">
          {t('headerCompany:documentation')}
        </DocumentsButton>
        <UnionButton to="/company/union">{t('headerCompany:union')}</UnionButton>
      </DivButton>
      <hr />
    </HeaderCompanyDiv>
  );
}
