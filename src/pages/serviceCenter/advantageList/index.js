import React from 'react';
import { AdvantageListDiv } from './styles';
export default function AdvantageList({ cardImg, cardText }) {
  return (
    <AdvantageListDiv>
      <img src={require(`../../../assets/icons_services_center/${cardImg}.png`)} />
      <p>{cardText}</p>
    </AdvantageListDiv>
  );
}
