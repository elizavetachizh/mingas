import React from 'react';
import { Image } from './styles';
export default function Schema({ title, href, alt, image, styleImage }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Image style={styleImage} alt={alt} src={image} title={title} />
    </a>
  );
}
