import React, { useCallback, useEffect } from 'react';
import {APIimage} from "../../../../../backend";
import ButtonFun from "../../../../../components/button";

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
        <div key={index} className={index === activeIndex ? 'slides-mobile active-mobile' : 'inactive-mobile'}>
          <img className="slide-image-image" src={`${APIimage}/${slide.image}`} alt="" />
          <h2 id={`content-${slide._id}`} className="slide-title-mobile" />
          {slide.link !== '' && (
            <ButtonFun
              classname={'slide-text-mobile'}
              href={`${slide.link}`}
              infoButton={`${slide.button}`}
              backgrounder={'border'}
            />
          )}
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
