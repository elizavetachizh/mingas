import React from 'react';
import { ParallaxD } from './styles';
import { ContainerContent } from '../Content/styles';

export default function ParallaxDiv() {
  return (
    <ContainerContent>
      <ParallaxD>
        <img
          alt={'загрузка картинки'}
          style={{ width: '100%' }}
          src={'https://back.mingas.by/public/images/backgroundCar.webp'}
        />
      </ParallaxD>
    </ContainerContent>
  );
}
