import React from 'react';
import { Button } from './styles';
export default function ButtonFun({
  infoButton,
  backgroundColor,
  borderRadius,
  currentPage,
  href,
}) {
  return (
    <Button href={href} backgroundColor={backgroundColor}>
      {infoButton}
    </Button>
  );
}
