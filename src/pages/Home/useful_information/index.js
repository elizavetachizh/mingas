import React from 'react';
import { DivUsefulInform, DivInform } from './styles';
import LinkInform from './components_link_inform';
import { data } from '../../../assets/data/data';
import { useTranslation } from 'react-i18next';
import TitleForHome from '../../../components/TitleForHome';

export default function UsefulInform() {
  const { t } = useTranslation();
  return (
    <DivUsefulInform>
      <TitleForHome
        margin={'s'}
        color={'blue'}
        fontSize={'m'}
        infoTitle={`${t('usefulInform:usefulInform')}`}
      ></TitleForHome>
      <DivInform>
        {data.map((element) => (
          <LinkInform
            key={element.id}
            cardImg={element.cardImg}
            cardDesc={element.cardDesc}
            link={element.link}
          />
        ))}
      </DivInform>
      <hr />
    </DivUsefulInform>
  );
}
