import React, { createRef, useEffect, useRef, useState } from 'react';
import imageContent from '../../../assets/background/mingas_background(2).jpg';
import { ContainerContent, DivContent, DivPrizes, Prizes } from './styles';
import CarouselFun from '../slider';
import { Parallax } from 'react-parallax';

const fireBackground = {
  display: 'none',
};

export default function ContentHome() {
  const [height, setHeight] = useState('900px');

  return (
    <ContainerContent>
      <Parallax style={{ height: `${height}`, width: '100%' }} bgImage={imageContent}>
        <DivPrizes>
          <Prizes>
            <img src={require(`../../../assets/prizes/primary_1.png`)} />
            <img src={require(`../../../assets/prizes/primary_2.png`)} />
            <img src={require(`../../../assets/prizes/primary_3.png`)} />
            <img src={require(`../../../assets/prizes/primary_4.png`)} />
          </Prizes>
          <DivContent>
            <CarouselFun />
          </DivContent>
        </DivPrizes>
      </Parallax>
    </ContainerContent>
  );
}
