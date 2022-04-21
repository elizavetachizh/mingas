import React from 'react';
import { ContainerServices, Imagecard, Textcard } from './styles';

export default function LinkServices({ img, text }) {
  return (
    <ContainerServices>
      <Imagecard src={require(`../../../../assets/icons_services/${img}.png`)} />
      <Textcard>{text}</Textcard>
    </ContainerServices>
  );
}
