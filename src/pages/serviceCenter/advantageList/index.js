import React from 'react';
import { AdvantageListDiv } from './styles';
export default function AdvantageList({ img, cardText }) {
  return (
    <AdvantageListDiv>
      <img src={img} />
      <p>{cardText}</p>
    </AdvantageListDiv>
  );
}
