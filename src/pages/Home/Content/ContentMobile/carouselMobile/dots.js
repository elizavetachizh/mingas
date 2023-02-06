import React from 'react';

function Dots({ activeIndex, onclick, sliderImage }) {
  return (
    <div className="all-dots-mobile">
      {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? 'dot-mobile active-dot-mobile' : 'dot-mobile'}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
