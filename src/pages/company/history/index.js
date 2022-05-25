import React from 'react';
import { Container } from '../styles';
import HeaderCompany from '../header_company';
import {
  DivText,
  DivTextPhoto,
  ImageDiv,
  WhatDoingCompany,
  WhatDoingCompaniInform,
} from './styles';
import Footer from '../../../components/footer';
import photoHistory from '../../../assets/management/0.jpg';
import ContentHome from '../../Home/Content';
import { data } from '../../../assets/whatDoingMinGaz';
import WhatDoingMinGaz from './whatDoingMinGaz';
import Header from '../../../components/header';
import up from '../../../assets/png/up_arrow_round.png';
import ScrollToTop from 'react-scroll-up';
import { t } from 'i18next';

export default function History() {
  return (
    <Container>
      <Header />
      <ContentHome />
      <HeaderCompany currentPage={'history'} />

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
