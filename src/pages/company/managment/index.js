import React from 'react';

import { t } from 'i18next';
import photoHistory from '../../../assets/management/0.jpg';
import WhatDoingMinGaz from '../history/whatDoingMinGaz';
import { Container } from './styles';
import Header from '../../../components/header';
import ContentHome from '../../Home/Content';
import HeaderCompany from '../header_company';
import {
  DivText,
  DivTextPhoto,
  ImageDiv,
  WhatDoingCompaniInform,
  WhatDoingCompany,
} from '../history/styles';
import { data } from '../../../assets/whatDoingMinGaz';
import ScrollToTop from 'react-scroll-up';
import Footer from '../../../components/footer';
import up from '../../../assets/png/up_arrow_round.png';
export default function Management() {
  return (
    <Container>
      <Header />
      <ContentHome />
      <HeaderCompany />
      <DivTextPhoto>
        <DivText>
          <p>{t('history:text1')}</p>
          <p>{t('history:text2')}</p>
          <p>{t('history:text3')}</p>
          <p>{t('history:text4')}</p>
        </DivText>
        <ImageDiv src={photoHistory} />
      </DivTextPhoto>
      <WhatDoingCompany>
        <h2>ЧТО ДЕЛАЕТ РУП "МИНГАЗ"</h2>
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
