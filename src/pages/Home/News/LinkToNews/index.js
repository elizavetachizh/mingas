import React from 'react';
import { DivNews, ImageLink, DateLink, DescLink } from './styles';

export default function LinkNews({ cardImg, cardDate, cardLink, cardDesc }) {
  return (
    <DivNews href={cardLink}>
      <ImageLink src={require(`../../../../assets/photo_news/${cardImg}.png`)} />
      <DateLink>{cardDate}</DateLink>
      <DescLink>{cardDesc}</DescLink>
    </DivNews>
  );
}
