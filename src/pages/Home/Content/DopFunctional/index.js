import { Divbackground, DivImage, DivInformAbout, DivText, Text } from '../styles';
import React, { useCallback, useEffect } from 'react';
import ButtonFun from '../../../../components/button';
import { APImage } from '../../../../backend';

export default function DopFunctional({ image, content, button, link, href }) {
  const getElement = useCallback((content) => {
    return document.getElementById(`content-${content}`);
  }, []);
  useEffect(() => {
    const element = getElement(content);
    if (element) {
      element.innerHTML += content;
    }
  }, [getElement, content]);

  return (
    <Divbackground>
      <DivImage>
        {' '}
        <img src={`${APImage}/public/images/${image}`} alt={''} />
      </DivImage>

      <DivText>
        <DivInformAbout>
          {' '}
          <Text id={`content-${content}`}>
            {content}{' '}
            {link && (
              <a href={link} target={'_blank'}>
                Перейти
              </a>
            )}
          </Text>
        </DivInformAbout>
        {button ? (
          <ButtonFun
            classname={'post'}
            href={`/posts/${href}`}
            infoButton={`${button}`}
            backgrounder={'border'}
          />
        ) : (
          <></>
        )}
      </DivText>
    </Divbackground>
  );
}
