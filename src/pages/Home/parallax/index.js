import React from 'react';
import { ParallaxD } from './styles';
import { ContainerContent } from '../Content/styles';

export default function ParallaxDiv() {
  return (
    <ContainerContent>
      <ParallaxD style={{ padding: 0, margin: 0, width: '100%' }}>
        <img
          alt={'загрузка картинки'}
          style={{ width: '100%' }}
          src={'https://back.mingas.by/public/images/backgroundCar.jpg'}
        />
      </ParallaxD>
    </ContainerContent>
  );
}
