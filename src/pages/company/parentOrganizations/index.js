import React from 'react';
import { Container } from '../../Home/styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleForHome from '../../../components/TitleForHome';
import HeaderCompany from '../header_company';
import {data} from '../../../assets/data/data_ParentOrganization'
import DopFunctional from "./DopFunctional";
import { ContainerLinks } from "./styles";
export default function ParentOrganizations() {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <HeaderCompany />
      <AdditionalDiv>

        <TitleForHome infoTitle={'Вышестоящие организации'} color={'blue'} />
       <ContainerLinks>
         {data.map((el)=>(
           <DopFunctional img={el.img} link={el.link} name={el.name} address={el.address} phone={el.phone} fax={el.fax} workMode={el.workingMode}/>
         ))}
       </ContainerLinks>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
