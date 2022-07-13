import { useParams, useSearchParams } from 'react-router-dom';
import React, { useMemo } from 'react';
import { data } from '../../../assets/dataInformAdministrativeService';
import DopFunctional from './DopFunctional';
import { Container } from '../../../pages/company/managment/styles';
import Header from '../../header';
import Footer from '../../footer';
import { AdditionalDiv } from '../../../pages/concats/GeneralContactInform/styles';
import HeaderAdministrativeServices from '../Header';
import { DivBlocks, ContainerInform } from './styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';

export default function InformationAdministrativeService() {
  const { serviceID } = useParams();
  const [searchParams] = useSearchParams();
    const linkId = searchParams.get('linkId');
  const currentDepartment = useMemo(
    () => data.filter((department) => linkId ?
        (department.serviceID === +serviceID && department.linkId === +linkId)
        : department.serviceID === +serviceID),
    [data, serviceID, linkId]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderAdministrativeServices />
          {/*<TitleFun color={'blue'} infoTitle={currentDepartment.serviceName} />*/}
          <ContainerInform>
            {currentDepartment.map((el) => (
              <DopFunctional key={el.uniqueName}
                uniqueName={el.uniqueName}
                maximumImplementationPeriod={el.maximumImplementationPeriod}
                certificateValidityPeriod={el.certificateValidityPeriod}
                boardSize={el.boardSize}
                documents={el.documents}
                contactInform={el.contactInform}
              />
            ))}
          </ContainerInform>
        </DivBlocks>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
