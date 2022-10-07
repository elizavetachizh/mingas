import React from 'react';
import { DivServicesList, DivInformService, Image, Name } from './styles';

export default function ServicesList({ imgCard, nameCard, onClick = {} }) {
  return (
    <DivServicesList onClick={() => onClick(nameCard)}>
      <Image alt={''} src={require(`../../../assets/icons_services/${imgCard}.png`)} />
      <DivInformService>
        <Name>{nameCard}</Name>
      </DivInformService>
    </DivServicesList>
  );
}
