import React from 'react';
import { DivUsefulInform, DivInform } from './styles';
import LinkInform from './components_link_inform';
import { data } from '../../../assets/data/data';
import TitleForHome from '../../../components/TitleForHome';

export default function UsefulInform() {
  return (
    <DivUsefulInform>
      <TitleForHome color={'blue'} infoTitle={'Полезная информация'} />
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
