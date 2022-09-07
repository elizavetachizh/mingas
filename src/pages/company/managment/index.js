import React, { useCallback, useEffect, useState } from 'react';
import { t } from 'i18next';
import photoHistory from '../../../assets/management/0.jpg';
import { DivLeadersPhotoPosition } from './styles';
import Header from '../../../components/header';
import HeaderCompany from '../header_company';
import { DivText, DivTextPhoto, ImageDiv } from '../history/styles';
import { management } from '../../../assets/data/data_management';
import ScrollToTop from 'react-scroll-up';
import Footer from '../../../components/footer';
import up from '../../../assets/png/up_arrow_round.png';
import Leaders from './divmagement';
import Modal from '../../../components/modalWindow';
import Aos from 'aos';
import { Container } from '../styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import Feedback from "../../feedback";
import minsk from "../../../assets/background/sertifikacia.jpg";
export default function Management() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLeader, setCurrentLeader] = useState({});
  const [nameId, setNameId] = useState(null);
  const handlerLeaderClick = useCallback((leader) => {
    setModalVisible(true);
    setCurrentLeader(leader);
    setNameId(leader.id);
  }, []);

  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <Feedback img={minsk} name={'Руководство'} />
      <AdditionalDiv>
        <HeaderCompany />
        <DivTextPhoto>
          <ImageDiv data-aos={'fade-up'} src={photoHistory} />
          <DivText data-aos={'fade-up'}>
            <p>{t('history:text1')}</p>
            <p>{t('history:text2')}</p>
            <p>{t('history:text3')}</p>
            <p>{t('history:text4')}</p>
            <p>
              Руководство текущей деятельностью УП "Мингаз" согласно уставу осуществляет генеральный
              директор, избираемый Общим собранием акционеров сроком на три года. Генеральный
              директор подотчетен Общему собранию акционеров и Совету директоров Общества.
            </p>
          </DivText>
        </DivTextPhoto>
        <DivLeadersPhotoPosition>
          {management.map((element) => (
            <Leaders
              idName={element.id}
              handlerLeaderClick={handlerLeaderClick}
              cardImg={element.cardImg}
              leader={element}
              key={element.id}
              fullName={element.fullName}
              position={element.position}
            />
          ))}
        </DivLeadersPhotoPosition>
        {isModalVisible && (
          <Modal
            handleCloseCLick={handleCloseCLick}
            currentLeader={currentLeader}
            nameId={nameId}
          />
        )}
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
