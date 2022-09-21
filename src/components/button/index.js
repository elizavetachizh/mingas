import React from 'react';
import { Button } from './styles';
export default function ButtonFun({ href, infoButton, backgrounder, style, classname }) {
  return (
    <Button className={classname} style={style} to={href} backgrounder={backgrounder}>
      {infoButton}
    </Button>
  );
}
