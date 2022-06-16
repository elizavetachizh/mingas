import React, { useCallback, useState } from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import {
  Description,
  DivAboutManagementBackground,
  DivAboutmanagementWhiteFont,
  DivBasicManagement,
  DivLeadersPhotoPosition,
  DivPhotoAndDescription,
  FullName,
  Position,
} from '../managment/styles';
import { data } from '../../../assets/data_management';
import Leaders from '../managment/divmagement';
import Modal from '../../../components/modalWindow';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';
import background from '../../../assets/background/background_company.jpg';
import {
  DivText,
  DivTextPhoto,
  ImageDiv,
  WhatDoingCompaniInform,
  WhatDoingCompany,
} from '../history/styles';
import { t } from 'i18next';
import photoHistory from '../../../assets/management/0.jpg';
import WhatDoingMinGaz from '../history/whatDoingMinGaz';

export default function Structure() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentLeader, setCurrentLeader] = useState({});
  const handlerLeaderClick = useCallback((leader) => {
    setModalVisible(true);
    setCurrentLeader(leader);
  }, []);
  // const style = {
  //   background: `url(${background}) no-repeat`,
  //   backgroundSize: 'cover',
  // };
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);
  return (
    <Container>
      <Header backgroundHeader="blue" />
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
            <DivTextPhoto>
              <DivText data-aos={'fade-up'}>
                <p>{t('history:text1')}</p>
                <p>{t('history:text2')}</p>
                <p>{t('history:text3')}</p>
                <p>{t('history:text4')}</p>
              </DivText>
              <ImageDiv data-aos={'fade-up'} src={photoHistory} />
            </DivTextPhoto>
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
      {/*<WhatDoingCompany>*/}
      {/*  <h2 data-aos={'fade-up'}>ЧТО ДЕЛАЕТ РУП "МИНГАЗ"</h2>*/}
      {/*  <WhatDoingCompaniInform>*/}
      {/*    {datado.map((element) => (*/}
      {/*      <WhatDoingMinGaz*/}
      {/*        key={element.desc}*/}
      {/*        cardImg={element.cardImg}*/}
      {/*        cardDesc={element.cardDesc}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </WhatDoingCompaniInform>*/}
      {/*</WhatDoingCompany>*/}
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
