import React from 'react';
import { Title } from './styles';
export default function TitleFun({ infoTitle, color, fontSize }) {
  return <Title color={color} fontSize={fontSize}>{infoTitle}</Title>;
}
