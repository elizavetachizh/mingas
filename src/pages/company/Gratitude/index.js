import React, { useCallback, useState } from 'react';
import { Container, ContainerGraditude } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TitleForHome from '../../../components/TitleForHome';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { ContainerIframe } from '../documentation/styles';
import { gratitude } from '../../../assets/data/gratitude';
export default function Gratitude() {
  const [visible, setVisible] = useState(false);
  const [currentServiceID, setServiceID] = useState(null);
  const openImage = useCallback(
    (id) => {
      if (currentServiceID === id) {
        setServiceID(null);
        setVisible(false);
      } else {
        setServiceID(id);
        setVisible(true);
      }
    },
    [visible, currentServiceID]
  );
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'gratitude'} />
      <TitleForHome infoTitle={'Благодарности и награды'} color={'blue'} />
      <AdditionalDiv>
        <ContainerIframe>
          {gratitude.map((element) => (
            <ContainerGraditude onClick={() => openImage(element.id)}>
              <img
                className={currentServiceID === element.id && visible && 'visibleOpen'}
                src={require(`../../../assets/pdf/gratitude/${element.img}.png`)}
                alt={''}
              />
            </ContainerGraditude>
          ))}
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
