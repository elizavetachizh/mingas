import React, { useCallback, useEffect, useState } from 'react';
import { data } from '../../../assets/data_services';
import DopFunctionService from '../DopFunction';
import { Container } from '../../company/styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { Button, Name } from '../../../components/administrativeServices/Header/styles';
import { HeaderCompanyDiv } from '../../concats/headerContacts/styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import {
  ContainerDescription,
  DivBlocks,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import { DivBtn } from './DopFunctionalHeader/styles';
import { useParams } from 'react-router';

export default function NaturalGas() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState(null);
  const [title, setTitle] = useState([]);
  const { cardId } = useParams();

  useEffect(() => {
    if (!inform.length && !currentServiceID && (!title.length || !title)) {
      const current = data.find((element) => element.serviceId === +cardId);
      setInform(current.description);
      setTitle(current.nameCard);
      setServiceID(+cardId);
    }
  }, [cardId, title, inform, currentServiceID]);

  const animate = useCallback(
    (descriptionID) => {
      const current = data.find((element) => element.serviceId === descriptionID);
      setInform(current.description);
      setTitle(current.nameCard);
      setServiceID(descriptionID);
    },
    [currentServiceID]
  );

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Услуги для физических лиц</Name>
            {data.map((element) => (
              <DivBtn>
                <Button
                  className={currentServiceID === element.serviceId ? 'background' : ''}
                  onClick={() => animate(element.serviceId)}
                  key={element.serviceId}
                >
                  {element.nameCard}
                </Button>
              </DivBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerDescription>
            <Name>{title}</Name>
            {inform.map((el) => (
              <DopFunctionService nameDescription={el.nameDescription} inform={el.inform} />
            ))}
          </ContainerDescription>
        </DivBlocks>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
