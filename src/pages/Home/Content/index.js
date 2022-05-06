import React from 'react';
import imageContent from '../../../assets/company/component.png';
import { ContainerContent, DivContent, DivPrizes, Prizes } from './styles';
import CarouselFun from '../slider';
import { Parallax } from 'react-parallax';
import fireBackgroundImg from '../../../assets/png/fire_content.png';

// const ParallaxStyle = {
//   height: '800px',
//   display: 'grid',
//   // width: '100% !important',
// };
const fireBackground = {
  background: `url(${fireBackgroundImg}) no-repeat`,
  height: '100%',
  bottom: 0,
  marginTop: '6%',
};
export default function ContentHome() {
  return (
    <ContainerContent>
      <Parallax style={{ height: '900px', width: '100%' }} bgImage={imageContent}>
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
