import React, { useCallback, useState } from 'react';
import { dataLegalEntities } from '../../../../assets/data_service_legalEntities_general';
import { Container } from '../../../company/styles';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import DopFunctionService from '../../DopFunction';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import up from '../../../../assets/png/up_arrow_round.png';
import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
import { Button, Name } from '../../../../components/administrativeServices/Header/styles';
import { DivBtn } from '../../NaturalGas/DopFunctionalHeader/styles';
import { DivBlocks } from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import ScrollToTop from 'react-scroll-up';
export default function CardOfService() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState('');
  const [title, setTitle] = useState([]);
  const animate = useCallback(
    (descriptionID) => {
      const current = dataLegalEntities.find((element) => element.serviceId === descriptionID);
      setInform(current.description);
      setTitle(current.nameCard);
      setServiceID(currentServiceID ? '' : descriptionID);
    },
    [currentServiceID]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Услуги для юридических лиц</Name>
            {dataLegalEntities.map((element) => (
              <DivBtn>
                <Button onClick={() => animate(element.serviceId)} key={element.serviceId}>
                  {element.nameCard}
                </Button>
              </DivBtn>
            ))}
          </HeaderCompanyDiv>
         <div> {inform.map((el) => (
           <DopFunctionService nameDescription={el.nameDescription} inform={el.inform} />
         ))}</div>
        </DivBlocks>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
