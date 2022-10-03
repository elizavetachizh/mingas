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
import Feedback from '../../feedback';
import minsk from '../../../assets/background/phone.jpg';

export default function NaturalGas() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState(null);
  const [title, setTitle] = useState([]);
  const { cardId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const current = data.find((element) => element.serviceId === +cardId);
    setInform(current?.description);
    setTitle(current.nameCard);
    setServiceID(+cardId);
  }, [cardId]);
  const animate = useCallback(
    (descriptionID) => {
      const current = data.find((element) => element.serviceId === descriptionID);
      setInform(current?.description);
      setTitle(current.nameCard);
      setServiceID(descriptionID);
      navigate(`/services/${descriptionID}`);
    },
    [navigate]
  );

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Услуги'} />
      <BackgroundStyleServices src={linesOne} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Услуги для физических лиц</Name>
            {data.map((element) => (
              <BlockBtn key={element.serviceId}>
                <DopFunctionalHeader
                  nameCard={element.nameCard}
                  className={currentServiceID === element.serviceId ? 'background' : ''}
                  onClick={() => animate(element.serviceId)}
                />
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerInform>
            <Name>{title}</Name>
            {inform.map((el) => (
              <DopFunctionService
                key={el.nameDescription}
                nameDescription={el.nameDescription}
                inform={el.inform}
              />
            ))}
          </ContainerInform>
        </DivBlocks>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
