import React from 'react';
import { Button } from '../../../../components/administrativeServices/Header/styles';

export default function DopFunctionalHeader({ key, nameCard, onClick = {}, className }) {
  return (
    <Button key={key} className={className} onClick={onClick}>
      {nameCard}
    </Button>
  );
}
