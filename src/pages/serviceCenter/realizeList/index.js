import React from 'react';
import { RealizeListDiv } from './styles';
export default function RealizeList({ cardImg, cardText }) {
  return (
    <RealizeListDiv>
      <img src={require(`../../../assets/icons_service-center_realize/realize_${cardImg}.png`)} />
      <p>{cardText}</p>
    </RealizeListDiv>
  );
}
