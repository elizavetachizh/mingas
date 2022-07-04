import React, { useState } from "react";
import { DivServicesList, DivInformService, Image, Name } from './styles';

export default function ServicesList({ imgCard, nameCard}) {

  return (
    <DivServicesList to={`/services/${nameCard}`}>
      <Image src={require(`../../../assets/icons_services/${imgCard}.png`)} />
      <DivInformService>
        <Name >{nameCard}</Name>
      </DivInformService>
    </DivServicesList>
  );
}
