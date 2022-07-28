import React from 'react';
import { Container, ContainerGraditude } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TitleForHome from '../../../components/TitleForHome';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { ContainerIframe } from '../documentation/styles';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import { DivInformAbout, DivText, Text } from '../../Home/Content/styles';
import { Trans } from 'react-i18next';
import ButtonFun from '../../../components/button';
import phone from '../../../assets/png/PhoneFour.png';
import worker from '../../../assets/png/master.png';
import { t } from 'i18next';
import gratitude11 from '../../../assets/pdf/gratitude/1/1.png';
import gratitude12 from '../../../assets/pdf/gratitude/1/2.png';
import gratitude13 from '../../../assets/pdf/gratitude/1/3.png';
import gratitude21 from '../../../assets/pdf/gratitude/2/1.png';
import gratitude31 from '../../../assets/pdf/gratitude/3/1.png';
import gratitude41 from '../../../assets/pdf/gratitude/4/1.png';
import gratitude51 from '../../../assets/pdf/gratitude/5/1.png';
import gratitude61 from '../../../assets/pdf/gratitude/6/1.png';
import gratitude71 from '../../../assets/pdf/gratitude/7/1.png';
import gratitude81 from '../../../assets/pdf/gratitude/8/1.png';

export default function Gratitude() {
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'gratitude'} />
      <TitleForHome infoTitle={'Благодарности и награды'} color={'blue'}></TitleForHome>
      <AdditionalDiv>
        <ContainerIframe>
          <ContainerGraditude>
            <img src={gratitude71} alt={''} />
          </ContainerGraditude>
          <ContainerGraditude>
            <img src={gratitude81} alt={''} />
          </ContainerGraditude>
          <ContainerGraditude>
            <img src={gratitude41} alt={''} />
          </ContainerGraditude>
          <ContainerGraditude>
            <img src={gratitude31} alt={''} />
          </ContainerGraditude>
          <ContainerGraditude>
            <img src={gratitude12} alt={''} />
          </ContainerGraditude>
          <ContainerGraditude>
            <img src={gratitude11} alt={''} />
          </ContainerGraditude>
          <ContainerGraditude>
            <img src={gratitude13} alt={''} />
          </ContainerGraditude>
          <ContainerGraditude>
            <img src={gratitude21} alt={''} />
          </ContainerGraditude>
          <ContainerGraditude>
            <img src={gratitude51} alt={''} />
          </ContainerGraditude>
          <ContainerGraditude>
            <img src={gratitude61} alt={''} />
          </ContainerGraditude>{' '}

          {/*<Carousel*/}
          {/*  plugins={[*/}
          {/*    'infinite',*/}
          {/*    {*/}
          {/*      resolve: autoplayPlugin,*/}
          {/*      options: {*/}
          {/*        interval: 4000,*/}
          {/*      },*/}
          {/*    },*/}
          {/*  ]}*/}
          {/*  animationSpeed={2000}*/}
          {/*>*/}
          {/*  <DivText>*/}
          {/*    <DivInformAbout>*/}
          {/*      <Text>*/}
          {/*        <Trans i18nKey="description:part1"></Trans>*/}
          {/*      </Text>*/}
          {/*      <ButtonFun*/}
          {/*        href={'/Services'}*/}
          {/*        backgroundColor={'blue'}*/}
          {/*        infoButton={t('infoButton:more')}*/}
          {/*      />*/}
          {/*    </DivInformAbout>*/}
          {/*    <a href={'tel:162'}>*/}
          {/*      <img src={phone} alt={''} />*/}
          {/*    </a>*/}
          {/*  </DivText>*/}
          {/*  <DivText>*/}
          {/*    <DivInformAbout>*/}
          {/*      <Text>{t('description:part2')}</Text>*/}
          {/*      <ButtonFun*/}
          {/*        href={'/Press-Center'}*/}
          {/*        backgroundColor={'blue'}*/}
          {/*        infoButton={t('infoButton:more')}*/}
          {/*      />*/}
          {/*    </DivInformAbout>*/}
          {/*    <a href={''}>*/}
          {/*      {' '}*/}
          {/*      <img src={worker} alt={''} />*/}
          {/*    </a>*/}
          {/*  </DivText>*/}
          {/*</Carousel>*/}
        </ContainerIframe>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
