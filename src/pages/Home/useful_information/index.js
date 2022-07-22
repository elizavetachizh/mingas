import React from 'react';
import { DivUsefulInform, DivInform, UsefulInformContainer } from './styles';
import { Container } from '../styles';
import LinkInform from './components_link_inform';
import { data } from '../../../assets/data';
import background from '../../../assets/background/background.png';
import linesOne from '../../../assets/background/lines.png';
import { BackgroundStyle } from '../services/styles';
import { Trans } from 'react-i18next';
import TitleForHome from '../../../components/TitleForHome';

export default function UsefulInform() {
  return (
    <Container src={background}>
      <BackgroundStyle src={linesOne} />
      <DivUsefulInform>
        <UsefulInformContainer>
          <TitleForHome
            color={'blue'}
            fontSize={'m'}
            infoTitle={<Trans i18nKey="usefulInform:usefulInform"></Trans>}
          ></TitleForHome>
          <DivInform>
            {data.map((element) => (
              <LinkInform
                key={element.cardDesc}
                cardImg={element.cardImg}
                cardDesc={element.cardDesc}
                link={element.link}
              />
            ))}
          </DivInform>
        </UsefulInformContainer>
      </DivUsefulInform>
    </Container>
  );
}
