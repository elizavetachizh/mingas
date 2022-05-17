import React from 'react';
import { DivUsefulInform, Title, DivInform, UsefulInformContainer, Line } from './styles';
import { Container } from '../styles';
import ButtonFun from '../../../components/button';
import LinkInform from './components_link_inform';
import { data } from '../../../assets/data';
import background from '../../../assets/background/background.png';
import linesOne from '../../../assets/background/lines.png';
import { BackgroundStyle } from '../services/styles';
import Search from '../Serch';
import { Trans, useTranslation } from "react-i18next";

export default function UsefulInform() {
  const { t, i18n  } = useTranslation();
  return (
    <Container src={background}>
      <BackgroundStyle src={linesOne} />
      <DivUsefulInform>
        <Search />
        <Line />
        <UsefulInformContainer>
          <Title><Trans i18nKey="usefulInform:usefulInform"></Trans></Title>
          <DivInform>
            {data.map((element) => (
              <LinkInform
                key={element.cardDesc}
                cardImg={element.cardImg}
                src={element.cardImg}
                cardDesc={element.cardDesc}
              />
            ))}
          </DivInform>
          {/*<ButtonFun*/}
          {/*  href={'/'}*/}
          {/*  backgroundColor={'blue'}*/}
          {/*  justifyContent={'center'}*/}
          {/*  infoButton={t('infoButton:more')}*/}
          {/*/>*/}
        </UsefulInformContainer>
      </DivUsefulInform>
    </Container>
  );
}
