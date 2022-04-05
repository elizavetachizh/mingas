import React from "react";
import { Routes ,Route } from 'react-router-dom';
import {HeaderCompanyDiv, HistoryButton, ManagementButton, StructureButton, CareerButton, DocumentsButton, DivButton} from "./styles";
import History from "../history";
import Management from "../managment";
import Structure from "../structure";
import Career from "../career";
import Documentation from "../documentation";
import ContentHome from "../../Home/Content";
import Header from "../../../components/header";

const hr = {
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    width: '60%'
}

const clickLink = document.querySelectorAll(DivButton)
clickLink.forEach((element)=> {
    element.addEventListener('click', function (){
        element.classList.toggle("red")
    }
)

})
export default function HeaderCompany({currentPage}) {
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
               {/*<ContentHome></ContentHome>*/}
               <DivButton>
                   <HistoryButton href="/company/history">История предприятия</HistoryButton>
                   <ManagementButton href="/company/management">Руководство</ManagementButton>
                   <StructureButton href="/company/structure">Структура предприятия</StructureButton>
                   <CareerButton href="/company/career">Карерьера в УП "Мингаз"</CareerButton>
                   <DocumentsButton href="/company/documentation">Документы</DocumentsButton>
               </DivButton>
               <hr style={hr}
               />
           </HeaderCompanyDiv>
        )
    }

