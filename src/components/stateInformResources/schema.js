import { DivCarousel } from './styles';
import React from 'react';

export default function Schema({ title, href, alt, image }) {
  return (
    <DivCarousel title={title}>
      <figure>
        <a href={href} target="_blank" rel="noreferrer">
          <img alt={alt} src={image} />
        </a>
      </figure>
    </DivCarousel>
  );
}
