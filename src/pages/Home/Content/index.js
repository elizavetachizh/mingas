import React, { useState } from 'react';
import imageContent from '../../../assets/png/oszczedzanie-gazu.jpg';
import { ContainerContent, DivContent, DivPrizes, Prizes } from './styles';
import CarouselFun from '../slider';
import { Parallax } from 'react-parallax';

const ParallaxStyle = {
  maxHeight: '100%',
  height: '800px',
  display: 'grid',
};
export default function ContentHome() {
  return (
    <ContainerContent>
      <Parallax
        style={ParallaxStyle}
        bgImage={imageContent}
        blur={{ min: -10, max: 10 }}
        strength={300}
      >
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
