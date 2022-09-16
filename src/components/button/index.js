import React from 'react';
import { Button } from './styles';
export default function ButtonFun({ href, infoButton, backgrounder, style }) {
  return (
    <Button style={style} to={href} backgrounder={backgrounder}>
      {infoButton}
    </Button>
  );
}
