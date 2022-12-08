import {Divbackground, DivImage, DivInformAbout, DivText, Text} from '../styles';
import React from 'react';
import ButtonFun from '../../../../components/button';

export default function DopFunctional({ image, content, button, link, href }) {
  return (
    <Divbackground >
      <DivImage>
        {' '}
        <img src={image} alt={''} />
      </DivImage>

      <DivText>
        <DivInformAbout>
          {' '}
          <Text>
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
