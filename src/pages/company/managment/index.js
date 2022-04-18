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
import director from '../../../assets/company/director.jpg';
import { data } from '../../../assets/data_management';
import Leaders from './divmagement';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import Modal from '../../../components/modalWindow';

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
      <HeaderCompany currentPage={'management'} />
      <DivAboutManagementBackground>
        <DivAboutmanagementWhiteFont>
          <DivBasicManagement>
            <DivPhotoAndDescription>
              <FullName>ФИО</FullName>
              <Position>Должность</Position>
              <Description>
                Руководство текущей деятельностью АО «МОСГАЗ» согласно уставу осуществляет
                генеральный директор, избираемый Общим собранием акционеров сроком на три года.
                Генеральный директор подотчетен Общему собранию акционеров и Совету директоров
                Общества.
              </Description>
            </DivPhotoAndDescription>
            <Photo src={director} />
          </DivBasicManagement>
          <DivLeadersPhotoPosition>
            {data.map((element) => (
              <Leaders
                handlerLeaderClick={handlerLeaderClick}
                leader={element}
                key={element.fullName}
                cardImg={element.cardImg}
                fullName={element.fullName}
                position={element.position}
              />
            ))}
          </DivLeadersPhotoPosition>
          {isModalVisible && (
            <Modal handleCloseCLick={handleCloseCLick} currentLeader={currentLeader} />
          )}
        </DivAboutmanagementWhiteFont>
      </DivAboutManagementBackground>
      <Footer />
    </Container>
  );
}
