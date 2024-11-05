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
      <ContainerParagraph>
        {sliderImage.map((slide, index) => (
          <a
            style={
              slide?.content
                ? { width: '100%' }
                : {
                    zIndex: 2,
                    width: '100%',
                    color: 'white',
                    margin: '0',
                    maxWidth: '700px',
                    position: 'fixed',
                    height: '40%',
                    marginTop: '-5rem',
                  }
            }
            href={slide?.link ? slide?.link : '/'}
            target={'_blank'}
            rel="noreferrer"
          >
            <div
              style={activeIndex === index ? { display: 'block' } : { display: 'none' }}
              id={`content-image-${slide._id}`}
            />
          </a>
        ))}
      </ContainerParagraph>
    </div>
  );
}

export default Dots;
