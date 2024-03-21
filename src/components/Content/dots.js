import React, { useCallback, useEffect } from 'react';

function Dots({ activeIndex, onclick, sliderImage }) {
  const getElement = useCallback((id) => {
    return document.getElementById(`content-${id}`);
  }, []);

  useEffect(() => {
    sliderImage.forEach((el) => {
      const element = getElement(el._id);
      if (element && !element.innerHTML) {
        element.innerHTML += el.button;
      }
    });
  }, [sliderImage, getElement]);
  return (
    <div>
      {sliderImage.map((slide, index) => (
        <a href={slide?.link ? slide?.link : '/'} target={'_blank'} rel="noreferrer">
          <div
            key={index}
            className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`}
            onMouseOver={() => onclick(index)}
          >
            <a href={slide?.link ? slide?.link : '/'} target={'_blank'} rel="noreferrer">
              <p id={`content-${slide._id}`} />
            </a>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Dots;
