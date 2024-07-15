import { DivCarousel } from './styles';
import React from 'react';

export default function Schema({ title, href, alt, image, styleImage }) {
  return (
    <DivCarousel title={title}>
      <figure>
        <a href={href} target="_blank" rel="noreferrer">
          <img style={styleImage} alt={alt} src={image} />
        </a>
      </figure>
    </DivCarousel>
  );
}
