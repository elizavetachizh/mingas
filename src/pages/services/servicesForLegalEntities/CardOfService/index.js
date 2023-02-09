import React, { useCallback, useEffect, useState } from 'react';
import { Container } from '../../../company/styles';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import DopFunctionService from '../../DopFunction';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import up from '../../../../assets/png/up_arrow_round.png';
import { HeaderCompanyDiv } from '../../../concats/headerContacts/styles';
import {
  BlockBtn,
  Name,
} from '../../../../components/administrativeServices/Header/styles';
import {
  ContainerInform,
  DivBlocks,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import ScrollToTop from 'react-scroll-up';
import { useNavigate, useParams } from 'react-router';
import minsk from '../../../../assets/background/phone.webp';
import Feedback from '../../../feedback';
import { BackgroundStyleServices } from '../../styles';
import linesOne from '../../../../assets/background/rig.webp';
import { API } from '../../../../backend';
import axios from 'axios';
import DopFunctionalHeader from '../../NaturalGas/DopFunctionalHeader';

export default function CardOfService() {
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState(null);
  const [title, setTitle] = useState([]);
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/services`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
          console.log(e);
      });
  }, [setData]);
  useEffect(() => {
    const current = data.find((element) => element._id === cardId);
    setInform(current?.description);
    setTitle(current?.name);
    setServiceID(cardId);
  }, [cardId, data]);

  const animate = useCallback(
    (descriptionID) => {
      const current = data.find((element) => element._id === descriptionID);
      setInform(current?.description);
      setTitle(current?.name);
      setServiceID(descriptionID);
      navigate(`/services-legal-entities/${descriptionID}`);
    },
    [navigate]
  );

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Услуги для юридических лиц'} />
      <BackgroundStyleServices src={linesOne} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Услуги для юридических лиц</Name>
            {data.map((element) => {
              if (element.type === '2') {
                return (
                  <BlockBtn key={element._id}>
                    <DopFunctionalHeader
                      nameCard={element.name}
                      className={currentServiceID === element._id ? 'background' : ''}
                      onClick={() => animate(element._id)}
                    />
                  </BlockBtn>
                );
              }
            })}
          </HeaderCompanyDiv>
          <ContainerInform>
            <Name>{title}</Name>
            {inform &&
              inform.map((el) => (
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
