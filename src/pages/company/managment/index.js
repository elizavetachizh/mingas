import React, { useCallback, useEffect, useState } from "react";

import { t } from 'i18next';
import photoHistory from '../../../assets/management/0.jpg';
import WhatDoingMinGaz from '../history/whatDoingMinGaz';
import { Container, Description, DivLeadersPhotoPosition } from './styles';
import Header from '../../../components/header';
import HeaderCompany from '../header_company';
import {
  DivText,
  DivTextPhoto,
  ImageDiv,
  WhatDoingCompaniInform,
  WhatDoingCompany,
} from '../history/styles';
import { data } from '../../../assets/whatDoingMinGaz';
import { management } from '../../../assets/data_management';
import ScrollToTop from 'react-scroll-up';
import Footer from '../../../components/footer';
import up from '../../../assets/png/up_arrow_round.png';
import Leaders from './divmagement';
import Modal from "../../../components/modalWindow";
import Aos from "aos";
import background from "../../../assets/background/подложка.png";
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
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const styleImage = {
    backgroundImage: `url(${background})`,
     backgroundRepeat: 'round',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'initial',
    backgroundSize: 'cover'
  }
  return (
    <Container style={styleImage}>
      <Header backgroundHeader={'blue'}/>
      {/*<ContentHome />*/}
      <HeaderCompany />
      <DivTextPhoto>
        <DivText data-aos={'fade-up'}>
          <p>{t('history:text1')}</p>
          <p>{t('history:text2')}</p>
          <p>{t('history:text3')}</p>
          <p>{t('history:text4')}</p>
          <Description>
            Руководство текущей деятельностью УП "Мингаз" согласно уставу осуществляет генеральный
            директор, избираемый Общим собранием акционеров сроком на три года. Генеральный директор
            подотчетен Общему собранию акционеров и Совету директоров Общества.
          </Description>
        </DivText>
        <ImageDiv data-aos={'fade-up'} src={photoHistory} />
      </DivTextPhoto>

      <DivLeadersPhotoPosition>
        {management.map((element) => (
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
      <WhatDoingCompany>
        <h2 data-aos={'fade-up'}>ЧТО ДЕЛАЕТ РУП "МИНГАЗ"</h2>
        <WhatDoingCompaniInform>
          {data.map((element) => (
            <WhatDoingMinGaz
              key={element.desc}
              cardImg={element.cardImg}
              cardDesc={element.cardDesc}
            />
          ))}
        </WhatDoingCompaniInform>
      </WhatDoingCompany>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
