import React from 'react';
import parallax from '../../../assets/parallax/car_mingas.jpg';
import { Parallax } from 'react-parallax';

import { ParallaxDivInter, ParallaxD } from './styles';
import useMediaQuery from './useMediaQuery';

export default function ParallaxDiv() {
  const isMedium = useMediaQuery('(max-width: 2000px)');
  return (
    <>
      {isMedium ? (
        <ParallaxD>
          <Parallax bgImage={parallax} strength={-300}>
            <ParallaxDivInter />
          </Parallax>
        </ParallaxD>
      ) : (
        <ParallaxD>
          <Parallax
            style={{ boxShadow: '0 0 5px 3px rgba(0, 0, 0, 0.2)', borderRadius: '20px' }}
            bgImage={parallax}
            strength={-300}
          >
            <ParallaxDivInter />
          </Parallax>
        </ParallaxD>
      )}
    </>
  );
}
