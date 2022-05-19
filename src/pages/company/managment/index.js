import React, { useCallback, useState } from 'react';
import HeaderCompany from '../header_company';
import {
  Container,
  DivAboutManagementBackground,
  DivAboutmanagementWhiteFont,
  DivBasicManagement,
  DivPhotoAndDescription,
  FullName,
  Position,
  Photo,
  Description,
  DivLeadersPhotoPosition,
} from './styles';
// import director from '../../../assets/company/0.jpg';
import { data } from '../../../assets/data_management';
import Leaders from './divmagement';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import Modal from '../../../components/modalWindow';
import up from '../../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';

export default function Management() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLeader, setCurrentLeader] = useState({});
  const handlerLeaderClick = useCallback((leader) => {
    setModalVisible(true);
    setCurrentLeader(leader);
  }, []);

  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <Container>
      <Header backgroundHeader="gray" />
      <HeaderCompany />
      <DivAboutManagementBackground>
        <DivAboutmanagementWhiteFont>
          <DivBasicManagement>
            <DivPhotoAndDescription>
              <FullName>Генеральный директор УП «МИНГАЗ»</FullName>
              <Position>Шолоник Вадим Евгеньевич</Position>
              <Description>
                Руководство текущей деятельностью УП "Мингаз" согласно уставу осуществляет
                генеральный директор, избираемый Общим собранием акционеров сроком на три года.
                Генеральный директор подотчетен Общему собранию акционеров и Совету директоров
                Общества.
              </Description>
            </DivPhotoAndDescription>
            {/*<Photo src={director} />*/}
          </DivBasicManagement>
          <DivLeadersPhotoPosition>
            {data.map((element) => (
              <Leaders
                handlerLeaderClick={handlerLeaderClick}
                cardImg={element.cardImg}
                leader={element}
                key={element.fullName}
                fullName={element.fullName}
                position={element.position}
                links={element.links}
              />
            ))}
          </DivLeadersPhotoPosition>
          {isModalVisible && (
            <Modal handleCloseCLick={handleCloseCLick} currentLeader={currentLeader} />
          )}
        </DivAboutmanagementWhiteFont>
      </DivAboutManagementBackground>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
