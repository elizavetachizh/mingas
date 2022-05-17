import React from 'react';
import parallax from '../../../assets/parallax/car_mingas.jpg';
import { Parallax } from 'react-parallax';

import { ParallaxDivInter, ParallaxD } from './styles';

export default function ParallaxDiv() {
  return (
   <ParallaxD>
     <Parallax bgImage={parallax} strength={-300}>
       <ParallaxDivInter />
     </Parallax>
   </ParallaxD>
  );
}
