import React from 'react';
import { Description, DivServicesList, DivInformService, Image, Name } from './styles';
import ButtonFun from '../../../components/button';

export default function ServicesList({ imgCard, nameCard, descName, button }) {
  return (
    <DivServicesList>
      <Image src={require(`../../../assets/photo_news/${imgCard}.png`)} />
      <DivInformService>
        <Name>{nameCard}</Name>
        <Description>{descName}</Description>
        <ButtonFun backgroundColor={'blue'} infoButton={button} />
      </DivInformService>
    </DivServicesList>
  );
}
