import React from 'react';
import parallax from '../../../assets/parallax/car_mingas.jpg';
import { Parallax } from 'react-parallax';

import { ParallaxDivInter, ParallaxD } from './styles';

export default function ParallaxDiv() {
  return (
   <ParallaxD>
     <Parallax style={{ boxShadow: ' 0 0 5px 3px rgba(0, 0, 0, 0.2)', borderRadius: '20px'}} bgImage={parallax} strength={-300}>
       <ParallaxDivInter />
     </Parallax>
   </ParallaxD>
  );
}
