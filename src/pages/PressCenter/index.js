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
import Feedback from '../feedback';
import minsk from '../../assets/background/phone.jpg';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';

export default function PressCenter() {
  const [inform, setInform] = useState('');
  const [currentNewsID, setNewsID] = useState(null);
  const [title, setTitle] = useState('');
  const [key, setKeys] = useState(null);
  const { descriptionID } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const current = pressCenter.find((element) => element.id === +descriptionID);
    setInform(current.description);
    setTitle(current.name);
    setKeys(current.id);
    setNewsID(+descriptionID);
  }, [descriptionID]);

  const animate = useCallback(
    (descriptionID) => {
      const current = pressCenter.find((element) => element.id === +descriptionID);
      setInform(current.description);
      setTitle(current.name);
      setNewsID(descriptionID);
      navigate(`/press-center/${descriptionID}`);
    },
    [navigate]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback className={'none'} img={minsk} name={'Пресс-центр'} />
      <AdditionalDiv>
        <DivBlocks>
          <HeaderCompanyDiv>
            <Name>Пресс-центр</Name>
            {pressCenter.map((element) => (
              <BlockBtn>
                <DopFunctionalHeader
                  key={element.id}
                  nameCard={element.name}
                  className={currentNewsID === element.id ? 'background' : ''}
                  onClick={() => animate(element.id)}
                />
              </BlockBtn>
            ))}
          </HeaderCompanyDiv>
          <ContainerInform>
            <Name>{title}</Name>
            <DopFunctionalPressCenter key={key} inform={inform} />
          </ContainerInform>
        </DivBlocks>
      </AdditionalDiv>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
