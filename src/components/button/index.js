import React from 'react';
import { Button } from './styles';
export default function ButtonFun({ href, infoButton, backgroundColor }) {
  return (
    <Button to={href} backgroundColor={backgroundColor}>
      {infoButton}
    </Button>
  );
}
