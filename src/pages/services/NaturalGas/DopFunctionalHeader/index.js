import React from 'react';
import { Button } from '../../../../components/administrativeServices/Header/styles';

export default function DopFunctionalHeader({ index, nameCard, onClick = {}, className }) {
  return (
    <Button key={index} className={className} onClick={onClick}>
      {nameCard}
    </Button>
  );
}
