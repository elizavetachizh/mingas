import React from 'react';
import { DivUsefulInform, DivInform, UsefulInformContainer, Line } from './styles';
import { Container } from '../styles';
import LinkInform from './components_link_inform';
import { data } from '../../../assets/data';
import background from '../../../assets/background/background.png';
import linesOne from '../../../assets/background/lines.png';
import { BackgroundStyle } from '../services/styles';
import Search from '../Serch';
import { Trans, useTranslation } from 'react-i18next';
import TitleFun from '../../../components/title';

export default function UsefulInform() {
  return (
    <Container src={background}>
      <BackgroundStyle src={linesOne} />
      <DivUsefulInform>
        {/*<Search />*/}
        {/*<Line />*/}
        <UsefulInformContainer>
          <TitleFun
            color={'blue'}
            fontSize={'s'}
            infoTitle={<Trans i18nKey="usefulInform:usefulInform"></Trans>}
          ></TitleFun>
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
