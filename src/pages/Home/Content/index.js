import React, { lazy, Suspense } from 'react';
import { ContainerContent, DivContent } from './styles';
import useMediaQuery from '../parallax/useMediaQuery';
import ContentMobile from './ContentMobile';
const CarouselFun = lazy(() => import('../slider'));
const renderLoader = () => <p>Loading</p>;
export default function ContentHome() {
  const isPhone = useMediaQuery('(max-width: 600px)');
  return (
    <>
      {isPhone ? (
        <ContentMobile />
      ) : (
        <ContainerContent>
          <DivContent>
            <Suspense fallback={renderLoader()}>
              <CarouselFun />
            </Suspense>
          </DivContent>
        </ContainerContent>
      )}
    </>
  );
}
