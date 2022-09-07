import React from 'react';
import { Button } from './styles';
export default function ButtonFun({ href, infoButton, backgroundColor, style }) {
  return (
    <Button style={style} to={href} backgroundColor={backgroundColor}>
      {infoButton}
    </Button>
  );
}
