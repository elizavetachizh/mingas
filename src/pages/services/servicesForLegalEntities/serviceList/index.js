import React from 'react';
import { DivServicesList, DivInformService, Image, Name } from '../../servicesList/styles';

export default function ServicesList({ imgCard, nameCard, onClick = {} }) {
  return (
    <DivServicesList onClick={() => onClick()}>
      <Image src={require(`../../../../assets/icons_services/${imgCard}.png`)} />
      <DivInformService>
        <Name>{nameCard}</Name>
      </DivInformService>
    </DivServicesList>
  );
}
