import React, { useCallback } from 'react';
import { data } from '../../../assets/data_services';
import { useParams } from 'react-router-dom';
import DopFunctionService from '../DopFunction';
import { Container } from '../../company/styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { useNavigate } from 'react-router';
import { Button, Name } from '../../../components/administrativeServices/Header/styles';
import { HeaderCompanyDiv } from '../../concats/headerContacts/styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { DivBlocks } from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import { DivBtn } from "./DopFunctionalHeader/styles";

export default function NaturalGas() {
  const navigate = useNavigate();

  const handlerServiceClick = useCallback((nameCard) => {
    navigate(`/services/${nameCard}`);
  }, []);
  const { nameCard } = useParams();
  const currentDepartment = data.find((service) => service.nameCard === nameCard);

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Услуги</Name>
            {data.map((element) => (
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
