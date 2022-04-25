import React from 'react';
import imageContent from '../../../assets/png/oszczedzanie-gazu.jpg';
import { DivImage, Image, DivContent } from './styles';
import CarouselFun from '../slider';

export default function ContentHome() {
  return (
    <DivImage>
      <Image src={imageContent} />
      <DivContent>
        <CarouselFun />
      </DivContent>
    </DivImage>
  );
}
