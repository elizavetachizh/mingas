import React, { useCallback, useEffect } from 'react';
import ButtonFun from '../button';
import { APIimage } from '../../backend';

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
        <div key={index} className={index === activeIndex ? 'slides active' : 'inactive'}>
          <img className="slide-image" src={`${APIimage}/${slide.image}`} alt="" />
          <h2 id={`content-${slide._id}`} className="slide-title" />
          <ButtonFun
            classname={'post'}
            href={`${slide.href}`}
            infoButton={`${slide.button}`}
            backgrounder={'border'}
            className="slide-text"
          />
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
