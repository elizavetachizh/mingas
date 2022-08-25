import React from 'react';
import ButtonFun from '../../../components/button';
import { DivInform } from './styles';
import { data } from '../../../assets/data/data_news';
import LinkNews from './LinkToNews';
import TitleForHome from '../../../components/TitleForHome';
const styledTitle = {
  margin: '0',
};
export default function News() {
  return (
    <div
      style={{
        boxShadow: ' 0 0 5px 3px rgba(0, 0, 0, 0.2)',
        borderRadius: '20px',
        paddingBottom: '1%',
      }}
    >
      <TitleForHome
        style={styledTitle}
        margin={'s'}
        fontSize={'m'}
        color={'blue'}
        infoTitle={'СМИ о нас'}
      />
      <DivInform>
        {data.map((element) => (
          <LinkNews
            cardImg={element.cardImg}
            cardDate={element.cardDate}
            cardLink={element.cardLink}
            cardDesc={element.cardDesc}
          />
        ))}
      </DivInform>
      <ButtonFun href={'/Press-Center'} infoButton={'Показать ещё'} backgroundColor={'blue'} />
    </div>
  );
}
