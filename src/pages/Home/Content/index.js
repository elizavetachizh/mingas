import React from 'react';
import imageContent from '../../../assets/background/mingasContent.jpg';
import { DivImage, Image, DivContent } from './styles';
import CarouselFun from '../slider';

export default function ContentHome() {
  return (
    <DivImage>
      <Image src={imageContent}></Image>
      <DivContent>
        <CarouselFun></CarouselFun>
      </DivContent>
    </DivImage>
  );
}
