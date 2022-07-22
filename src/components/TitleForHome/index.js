import React from 'react';
import { Title } from './styles';
export default function TitleForHome({ infoTitle, color, fontSize, margin }) {
  return (
    <Title color={color} fontSize={fontSize} margin={margin}>
      {infoTitle}
    </Title>
  );
}
