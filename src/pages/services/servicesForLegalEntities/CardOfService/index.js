import React, { useCallback, useEffect, useState } from 'react';
import { dataLegalEntities } from '../../../../assets/data/data_service_legalEntities_general';
import { Container } from '../../../company/styles';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import DopFunctionService from '../../DopFunction';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import up from '../../../../assets/png/up_arrow_round.png';
import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
import {
  BlockBtn,
  Button,
  Name,
} from '../../../../components/administrativeServices/Header/styles';
import {
  ContainerInform,
  DivBlocks,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import ScrollToTop from 'react-scroll-up';
import { useParams } from 'react-router';
import minsk from '../../../../assets/background/phone.jpg';
import Feedback from '../../../feedback';

export default function CardOfService() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState(null);
  const [title, setTitle] = useState([]);
  const { cardId } = useParams();
  useEffect(() => {
    if (!inform.length && !currentServiceID && (!title.length || !title)) {
      const current = dataLegalEntities.find((element) => element.serviceId === +cardId);
      setInform(current.description);
      setTitle(current.nameCard);
      setServiceID(+cardId);
    }
  }, [cardId, title, inform, currentServiceID]);

  const animate = useCallback(
    (descriptionID) => {
      const current = dataLegalEntities.find((element) => element.serviceId === descriptionID);
      setInform(current.description);
      setTitle(current.nameCard);
      window.scrollTo(0, 0);
      setServiceID(currentServiceID ? '' : descriptionID);
    },
    [currentServiceID]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Услуги для юридических лиц'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Услуги для юридических лиц</Name>
            {dataLegalEntities.map((element) => (
              <BlockBtn>
                <Button
                  className={currentServiceID === element.serviceId ? 'background' : ''}
                  onClick={() => animate(element.serviceId)}
                  key={element.serviceId}
                >
                  {element.nameCard}
                </Button>
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerInform>
            <Name>{title}</Name>
            {inform.map((el) => (
              <DopFunctionService nameDescription={el.nameDescription} inform={el.inform} />
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
