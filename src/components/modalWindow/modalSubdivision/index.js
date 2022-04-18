import React from 'react';
import { Name } from './styles';

export default function ModalSubdivision({ name, link, subdivision }) {
  return (
    <div>
      <Name href={link}>{name}</Name>
    </div>
  );
}
