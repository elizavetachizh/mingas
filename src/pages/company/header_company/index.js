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
        <UnionButton to="/company/union">Профсоюз</UnionButton>
      </DivButton>
      <hr />
    </HeaderCompanyDiv>
  );
}
