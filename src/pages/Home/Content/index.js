import React from 'react';
import { ContainerContent, DivContent } from './styles';
import CarouselFun from '../slider';
import useMediaQuery from '../parallax/useMediaQuery';
import ContentMobile from './ContentMobile';

export default function ContentHome() {
  const isPhone = useMediaQuery('(max-width: 600px)');
  return (
    <>
      {isPhone ? (
        <ContentMobile />
      ) : (
        <ContainerContent>
          <DivContent>
            <CarouselFun />
          </DivContent>
        </ContainerContent>
      )}
    </>
  );
}
