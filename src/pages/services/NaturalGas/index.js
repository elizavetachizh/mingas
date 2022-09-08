import React, { useCallback, useEffect, useState } from 'react';
import { data } from '../../../assets/data/data_services';
import DopFunctionService from '../DopFunction';
import { Container } from '../../company/styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { BlockBtn, Name } from '../../../components/administrativeServices/Header/styles';
import { HeaderCompanyDiv } from '../../concats/headerContacts/styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import {
  ContainerInform,
  DivBlocks,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import { useNavigate, useParams } from 'react-router';
import DopFunctionalHeader from './DopFunctionalHeader';
import linesOne from '../../../assets/background/rig.png';
import { BackgroundStyleServices } from '../styles';
import services from '../../../assets/background/uslugi-i-ceny-4.jpg';
import Feedback from '../../feedback';

export default function NaturalGas() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState(null);
  const [title, setTitle] = useState([]);
  const { cardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!inform.length && !currentServiceID && (!title.length || !title)) {
      const current = data.find((element) => element.serviceId === +cardId);
      setInform(current.description);
      setTitle(current.nameCard);
      setServiceID(+cardId);
    }
  }, [cardId, title, inform, currentServiceID]);
  useEffect(() => window.scrollTo(0, 0), []);
  const animate = useCallback(
    (descriptionID) => {
      const current = data.find((element) => element.serviceId === descriptionID);
      setInform(current.description);
      setTitle(current.nameCard);
      setServiceID(descriptionID);
      window.scrollTo(0, 0);
      navigate(`/services/${descriptionID}`);
    },
    [currentServiceID]
  );

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback img={services} name={'Услуги'} />
      <BackgroundStyleServices src={linesOne} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Услуги для физических лиц</Name>
            {data.map((element) => (
              <BlockBtn>
                <DopFunctionalHeader
                  nameCard={element.nameCard}
                  className={currentServiceID === element.serviceId ? 'background' : ''}
                  onClick={() => animate(element.serviceId)}
                  key={element.serviceId}
                />
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
