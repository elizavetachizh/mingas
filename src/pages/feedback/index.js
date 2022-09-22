import React from 'react';
import { Divbackground, DivImage, Text } from './styles';

export default function Feedback({ img, name, className }) {
  return (
    <Divbackground>
      <DivImage className={className}>
        <img src={img}></img>
      </DivImage>
      <Text>
        <h1>{name}</h1>
      </Text>
    </Divbackground>
  );
}
