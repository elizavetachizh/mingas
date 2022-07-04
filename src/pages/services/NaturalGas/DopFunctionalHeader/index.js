import React from 'react';
import { Name } from '../../servicesList/styles';
import { BtnLink } from './styles';

export default function DopFunctionalHeader({ nameCard }) {
  return (
    <BtnLink to={`/services/${nameCard}`}>
      <Name>{nameCard}</Name>
    </BtnLink>
  );
}
