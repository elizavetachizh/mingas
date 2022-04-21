import React from 'react';
import parallax from '../../../assets/png/parallax2.jpg';
import { Parallax } from 'react-parallax';

const ParallaxStyle = {
  width: '100%',
  height: '500px',
};

export default function ParallaxDiv() {
  return (
    <Parallax bgImage={parallax} strength={-300}>
      <div style={ParallaxStyle} />
    </Parallax>
  );
}
