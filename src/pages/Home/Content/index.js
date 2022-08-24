import React, { useState } from 'react';
import imageContent from '../../../assets/background/mingas_background(2).jpg';
import { ContainerContent, DivContent, DivPrizes } from './styles';
import CarouselFun from '../slider';
import { Parallax } from 'react-parallax';

export default function ContentHome() {
  const [height, setHeight] = useState('500px');

  return (
    <ContainerContent>
      <Parallax
        style={{ height: `${height}`, borderRadius: '20px', marginTop: '154px' }}
        bgImage={imageContent}
        strength={-100}
        blur={{ min: -4, max: 10 }}
      >
        <DivPrizes>
          <DivContent>
            <CarouselFun />
          </DivContent>
        </DivPrizes>
      </Parallax>
    </ContainerContent>
  );
}
