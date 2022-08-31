import React from 'react';
import { DivNews, DateLink, DescLink } from './styles';
import gradient from '../../../../assets/background/gradient.png';

export default function LinkNews({ cardImg, cardDate, cardLink, cardDesc }) {
  return (
    <DivNews
      style={{
        backgroundImage: `url('${gradient}')`,
      }}
      href={cardLink}
    >
      <img src={{cardImg}} />
      <DateLink>{cardDate}</DateLink>
      <DescLink>{cardDesc}</DescLink>
    </DivNews>
  );
}
