import React from 'react';
import { DivUsefulInform, DivInform } from './styles';
import LinkInform from './components_link_inform';
import { data } from '../../../assets/data/data';
import linesOne from '../../../assets/background/lines.png';
import { BackgroundStyle } from '../services/styles';
import { Trans } from 'react-i18next';
import TitleForHome from '../../../components/TitleForHome';

export default function UsefulInform() {
  return (
    <>
      <BackgroundStyle src={linesOne} />
      <DivUsefulInform>
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
      </DivUsefulInform>
    </>
  );
}
