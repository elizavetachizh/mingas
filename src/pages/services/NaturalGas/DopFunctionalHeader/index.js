import React from 'react';
import { Button } from '../../../../components/administrativeServices/Header/styles';

export default function DopFunctionalHeader({ nameCard, onClick = {}, className }) {
  return (
    <Button className={className} onClick={onClick}>
      {nameCard}
    </Button>
  );
}
