import React from 'react';
import { SubTitle } from "./styles";
export default function SubTitleFun({ infoSubTitle, color, fontSize }) {
  return <SubTitle color={color}  fontSize={fontSize}>{infoSubTitle}</SubTitle>;
}
