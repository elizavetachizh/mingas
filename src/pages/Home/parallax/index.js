import React from 'react';
import parallax from '../../../assets/png/parallax2.jpg';
import { Parallax } from 'react-parallax';
import useMediaQuery from './useMediaQuery';
import { ParallaxDivInter, DivParallax } from './styles';

export default function ParallaxDiv() {
  const isDesktop = useMediaQuery('(max-width: 800px)');
  return (
    <Parallax className={isDesktop && 'mobile'} bgImage={parallax} strength={-300}>
      <ParallaxDivInter />
    </Parallax>
  );
}
