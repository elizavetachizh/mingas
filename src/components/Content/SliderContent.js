import React from 'react';
import { ContainerImage } from './styles';

function SliderContent({ activeIndex, sliderImage }) {
  return sliderImage.map((slide, index) => (
    <div key={index} className={activeIndex === index ? 'slides active' : 'inactive'}>
      <ContainerImage className="container-image">
        <img
          className="slide-image"
          src={slide.image}
          alt=""
        />
      </ContainerImage>
    </div>
  ));
}

export default SliderContent;
