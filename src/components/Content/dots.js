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
        <>
          {slide.button !== '' && (
            <div
              key={index}
              className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`}
              onMouseOver={() => onclick(index)}
            >
              <p id={`content-${slide._id}`} />
            </div>
          )}
        </>
      ))}
    </div>
  );
}

export default Dots;
