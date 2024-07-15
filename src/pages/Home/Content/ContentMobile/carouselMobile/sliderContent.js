import React, { useCallback, useEffect } from 'react';
import { APIimage } from '../../../../../backend';

function SliderContent({ activeIndex, sliderImage }) {
  const getElement = useCallback((id) => {
    return document.getElementById(`content-${id}`);
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
    <section>
      {sliderImage.map((slide, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'slides-mobile active-mobile' : 'inactive-mobile'}
        >
          <a href={slide?.link ? slide?.link : '/'} target={'_blank'} rel="noreferrer">
            <img
                className="slide-image-image"
                src={slide.image}
                alt=""
            />
            <div id={`content-${slide._id}`} className="slide-title-mobile"/>
          </a>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
