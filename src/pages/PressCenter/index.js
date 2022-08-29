import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import video from '../../assets/video/Фильм.mp4';
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
import ReactPlayer from 'react-player';

export default function PressCenter() {
  const [inform, setInform] = useState('');
  const [currentNewsID, setNewsID] = useState(null);
  const [title, setTitle] = useState('');
  const { newsId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!inform && !currentNewsID && !title) {
      const current = pressCenter.find((element) => element.id === +newsId);
      setInform(current.description);
      setTitle(current.name);
      setNewsID(+newsId);
    }
  }, [newsId, inform, currentNewsID, title]);

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
  console.log(inform);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
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
            {/*<ReactPlayer*/}
            {/*  className={'react-player'}*/}
            {/*  light={require('../../assets/png/logo_video.png')}*/}
            {/*  style={{ margin: '2% auto', backgroundSize: '50%', backgroundRepeat: 'no-repeat' }}*/}
            {/*  controls*/}
            {/*  url={video}*/}
            {/*/>*/}
            <DopFunctionalPressCenter inform={inform} controls />
          </ContainerInform>
        </DivBlocks>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
