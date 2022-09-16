import React from 'react';
import { ContainerContent, DivContent } from './styles';
import CarouselFun from '../slider';

export default function ContentHome() {
  return (
    <ContainerContent>
      <DivContent>
        <CarouselFun />
      </DivContent>
    </ContainerContent>
  );
}
