import React from 'react';
import { ParallaxD } from './styles';
import { ContainerContent } from '../Content/styles';

export default function ParallaxDiv() {
  return (
    <ContainerContent className={"parallax"} style={{ marginTop: 0}}>
      <ParallaxD>
        <img
          alt={'загрузка картинки'}
          style={{ width: '100%', marginTop: 0 }}
          src={'https://back.mingas.by/public/images/backgroundCar.jpg'}
        />
      </ParallaxD>
    </ContainerContent>
  );
}
