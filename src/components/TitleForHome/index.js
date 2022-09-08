import React from 'react';
import { Title } from './styles';
export default function TitleForHome({ infoTitle, color, fontSize, margin, style, className }) {
  return (
    <Title className={className} style={style} color={color} fontSize={fontSize} margin={margin}>
      {infoTitle}
    </Title>
  );
}
