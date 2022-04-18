import {
  CareerButton,
  DivButton,
  DocumentsButton,
  HeaderCompanyDiv,
  HistoryButton,
  ManagementButton,
  StructureButton,
} from '../../company/header_company/styles';
import { Route, Routes } from 'react-router-dom';
import History from '../../company/history';
import Management from '../../company/managment';
import Structure from '../../company/structure';
import Career from '../../company/career';
import Documentation from '../../company/documentation';
import Header from '../../../components/header';
import React from 'react';

export default function HeaderCompany({ currentPage }) {
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
        {/*<HistoryButton to="/company/history">История предприятия</HistoryButton>*/}
        {/*<ManagementButton to="/company/management">Руководство</ManagementButton>*/}
        {/*<StructureButton to="/company/structure">Структура предприятия</StructureButton>*/}
        {/*<CareerButton to="/company/career">Карерьера в УП "Мингаз"</CareerButton>*/}
        {/*<DocumentsButton to="/company/documentation">Документы</DocumentsButton>*/}
      </DivButton>
      <hr style={hr} />
    </HeaderCompanyDiv>
  );
}
