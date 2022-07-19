import React from 'react';
import { DivServicesList, DivInformService, Image, Name } from '../../servicesList/styles';

export default function ServicesList({ imgCard, nameCard }) {
  return (
    <DivServicesList to={`/services-legal-entities/${nameCard}`}>
      <Image src={require(`../../../../assets/icons_services/${imgCard}.png`)} />
      <DivInformService>
        <Name>{nameCard}</Name>
      </DivInformService>
    </DivServicesList>
  );
}
