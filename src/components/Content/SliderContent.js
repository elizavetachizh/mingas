import React, { useCallback, useEffect } from 'react';
import { APIimage } from '../../backend';

function SliderContent({ activeIndex, sliderImage }) {
  const getElement = useCallback((id) => {
    return document.getElementById(`content-image-${id}`);
  }, []);
  useEffect(() => {
    sliderImage.forEach((el) => {
      const element = getElement(el._id);
      if (element && !element.innerHTML) {
        element.innerHTML += el.content;
      }
    });
  }, [sliderImage, getElement]);
  return (
    <>
      {sliderImage.map((slide, index) => (
        <div key={index} className={activeIndex === index ? 'slides active' : 'inactive'}>
          <div className="container-text">
            <p id={`content-image-${slide._id}`} />
          </div>
          <div className="container-image">
            <img className="slide-image" src={`${APIimage}/${slide.image}`} alt="" />
          </div>
        </div>
      ))}
    </>
  );
}

export default SliderContent;
