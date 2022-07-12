import { useParams } from 'react-router-dom';
import React, { useMemo } from 'react';
import { data } from '../../../assets/dataInformAdministrativeService';
import DopFunctional from './DopFunctional';
import { Container } from '../../../pages/company/managment/styles';
import Header from '../../header';
import Footer from '../../footer';
import { AdditionalDiv } from '../../../pages/concats/GeneralContactInform/styles';
import TitleFun from '../../title';
import HeaderAdministrativeServices from '../Header';
import { DivBlocks } from "./styles";

export default function InformationAdministrativeService() {
  const { serviceID } = useParams();
  const currentDepartment = useMemo(() => data.filter((id) => id.serviceID === +serviceID), [data]);
  console.log(currentDepartment[0].serviceName);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
       <DivBlocks>
         <HeaderAdministrativeServices />
         <TitleFun color={'blue'} infoTitle={serviceID} />
         <p>{currentDepartment.serviceName}</p>
         {currentDepartment.map((el)=>(
           <DopFunctional
             // serviceName={serviceName}
             uniqueName={el.uniqueName}
             maximumImplementationPeriod={el.maximumImplementationPeriod}
             certificateValidityPeriod={el.certificateValidityPeriod}
             boardSize={el.boardSize}
             documents={el.documents}
             contactInform={el.contactInform}
           />
         ))}
       </DivBlocks>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
