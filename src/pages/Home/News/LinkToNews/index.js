import React from 'react';
import { DivNews, DateLink, DescLink } from './styles';
import gradient from '../../../../assets/background/gradient.png';

export default function LinkNews({ cardImg, cardDate, cardLink, cardDesc }) {
  return (
    <DivNews
      style={{
        backgroundImage: `url('${gradient}')`,
      }}
      to={cardLink}
    >
      <img src={require(`../../../../assets/photo_news/${cardImg}.png`)} />
      <DateLink>{cardDate}</DateLink>
      <DescLink>{cardDesc}</DescLink>
    </DivNews>
  );
}
