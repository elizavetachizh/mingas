import React from 'react';
import {
  HeaderCompanyDiv,
  HistoryButton,
  ManagementButton,
  StructureButton,
  CareerButton,
  DocumentsButton,
  DivButton,
} from './styles';
import Header from '../../../components/header';

const hr = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60%',
};

export default function HeaderCompany() {
  return (
    <HeaderCompanyDiv>
      <Header />
      <DivButton>
        <HistoryButton to="/company/history">История предприятия</HistoryButton>
        <ManagementButton to="/company/management">Руководство</ManagementButton>
        <StructureButton to="/company/structure">Структура предприятия</StructureButton>
        <CareerButton to="/company/career">Карерьера в УП "Мингаз"</CareerButton>
        <DocumentsButton to="/company/documentation">Документы</DocumentsButton>
      </DivButton>
      <hr style={hr} />
    </HeaderCompanyDiv>
  );
}
