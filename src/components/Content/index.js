import React from 'react';
import {DivbackgroundNew, DivImageNew, Text} from '../../pages/feedback/styles';

export default function Content({index, img, info, className }) {
  return (
    <DivbackgroundNew key={index}>
      <DivImageNew className={className}>
        <img rel={'preco'} alt={''} src={img}></img>
      </DivImageNew>
      <Text>{info}</Text>
    </DivbackgroundNew>
  );
}
