import React, { useCallback, useEffect } from 'react';
import { ContainerParagraph, ContainerText } from '../../pages/Home/Content/styles';

function Dots({ activeIndex, onclick, sliderImage }) {
  const getElementForContextImage = useCallback((id) => {
    return document.getElementById(`content-image-${id}`);
  }, []);
  useEffect(() => {
    sliderImage.forEach((el) => {
      const elementContent = getElementForContextImage(el._id);
      if (elementContent && !elementContent.innerHTML) {
        elementContent.innerHTML += el.content;
      }
    });
  }, [sliderImage, getElementForContextImage]);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'row' }}>
      <ContainerText>
        <div>
          {sliderImage.map((slide, index) => (
            <a href={slide?.link ? slide?.link : '/'} target={'_blank'} rel="noreferrer">
              <div
                key={index}
                className={`${activeIndex === index ? 'dot active-dot' : 'dot'}`}
                onMouseOver={() => onclick(index)}
              >
                <a href={slide?.link ? slide?.link : '/'} target={'_blank'} rel="noreferrer">
                  <p id={`content-${slide._id}`}>{slide.button}</p>
                </a>
              </div>
            </a>
          ))}
        </div>
      </ContainerText>
      <ContainerParagraph
        style={{ zIndex: 2, width: '100%', color: 'white', margin: 'auto 0', maxWidth: '600px' }}
      >
        {sliderImage.map((slide, index) => (
          <div
            style={activeIndex === index ? { display: 'block' } : { display: 'none' }}
            id={`content-image-${slide._id}`}
          />
        ))}
      </ContainerParagraph>
    </div>
  );
}

export default Dots;
