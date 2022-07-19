import React, { useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { dataLegalEntities } from '../../../../assets/data_service_legalEntities_general';
import { Container } from '../../../company/styles';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import DopFunctionService from '../../DopFunction';
import { useNavigate } from 'react-router';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import up from '../../../../assets/png/up_arrow_round.png';
import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
import { Button, Name } from '../../../../components/administrativeServices/Header/styles';
import { DivBtn } from '../../NaturalGas/DopFunctionalHeader/styles';
import { DivBlocks } from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import ScrollToTop from 'react-scroll-up';
export default function CardOfService() {
  const navigate = useNavigate();
  const handlerServiceClick = useCallback((nameCard) => {
    navigate(`/services-legal-entities/${nameCard}`);
  }, []);
  const { nameCard } = useParams();
  const currentDepartment = dataLegalEntities.find((service) => service.nameCard === nameCard);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Услуги</Name>
            {dataLegalEntities.map((element) => (
              <DivBtn>
                <Button onClick={() => handlerServiceClick(element.nameCard)}>
                  {element.nameCard}
                </Button>
              </DivBtn>
            ))}
          </HeaderCompanyDiv>
          <DopFunctionService
            name={currentDepartment.nameCard}
            description={currentDepartment.description}
          />
        </DivBlocks>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
