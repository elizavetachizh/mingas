import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import { AdditionalDiv } from '../concats/GeneralContactInform/styles';
import {
  ContainerInform,
  DivBlocks,
} from '../../components/administrativeServices/InformaationAdministrativeService/styles';
import { HeaderCompanyDiv } from '../concats/headerContacts/styles';
import { BlockBtn, Name } from '../../components/administrativeServices/Header/styles';
import DopFunctionalHeader from '../services/NaturalGas/DopFunctionalHeader';
import { Container } from '../company/styles';
import { pressCenter } from '../../assets/data/pressCenterHeader';
import { useNavigate, useParams } from 'react-router';
import DopFunctionalPressCenter from './DopFunctional';
import services from '../../assets/background/press.jpg';
import Feedback from '../feedback';

export default function PressCenter() {
  const [inform, setInform] = useState('');
  const [currentNewsID, setNewsID] = useState(null);
  const [title, setTitle] = useState('');
  const { descriptionID } = useParams();
  const navigate = useNavigate();
  console.log(descriptionID);
  useEffect(() => {
    if (!inform && !currentNewsID && !title) {
      const current = pressCenter.find((element) => element.id === +descriptionID);
      console.log(current);
      setInform(current.description);
      setTitle(current.name);
      setNewsID(+descriptionID);
    }
  }, [descriptionID, inform, currentNewsID, title]);

  const animate = useCallback(
    (descriptionID) => {
      const current = pressCenter.find((element) => element.id === descriptionID);
      setInform(current.description);
      setTitle(current.name);
      setNewsID(descriptionID);
      navigate(`/press-center/${descriptionID}`);
    },
    [currentNewsID]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback img={services} name={'Пресс-центр'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Пресс-центр</Name>
            {pressCenter.map((element) => (
              <BlockBtn>
                <DopFunctionalHeader
                  nameCard={element.name}
                  className={currentNewsID === element.id ? 'background' : ''}
                  onClick={() => animate(element.id)}
                  key={element.id}
                />
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerInform>
            <Name>{title}</Name>
            <DopFunctionalPressCenter inform={inform} controls />
          </ContainerInform>
        </DivBlocks>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
