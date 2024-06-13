import React from 'react';
import { APIimage } from '../../backend';
import { ContainerImage } from './styles';

function SliderContent({ activeIndex, sliderImage }) {
  return sliderImage.map((slide, index) => (
    <div key={index} className={activeIndex === index ? 'slides active' : 'inactive'}>
      <ContainerImage>
        <img
          className="slide-image"
          src={`${APIimage}/${slide.image ? slide.image : 'phone.webp'}`}
          alt=""
        />
      </ContainerImage>
    </div>
  ));
}

export default SliderContent;
