import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  HeaderCompanyDiv,
  HistoryButton,
  ManagementButton,
  StructureButton,
  CareerButton,
  DocumentsButton,
  DivButton,
} from './styles';
import History from '../history';
import Management from '../managment';
import Structure from '../structure';
import Career from '../career';
import Documentation from '../documentation';
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
      <Routes>
        <Route path="/company/history" component={<History></History>}></Route>
        <Route path="/management" component={<Management></Management>}></Route>
        <Route path="/structure" component={<Structure></Structure>}></Route>
        <Route path="/career" component={<Career></Career>}></Route>
        <Route path="/documentation" component={<Documentation></Documentation>}></Route>
      </Routes>
      <Header></Header>
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
