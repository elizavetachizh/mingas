import React, { createRef, useEffect, useRef, useState } from 'react';
import imageContent from '../../../assets/company/component.png';
import { ContainerContent, DivContent, DivPrizes, Prizes } from './styles';
import CarouselFun from '../slider';
import { Parallax } from 'react-parallax';

// const ParallaxStyle = {
//   height: '800px',
//   display: 'grid',
//   // width: '100% !important',
// };
const fireBackground = {
 'display':'none'
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
