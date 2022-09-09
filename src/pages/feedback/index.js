import React from 'react';
import { Divbackground, DivImage, Text } from './styles';

export default function Feedback({ img, name }) {
  return (
    <>
      <Divbackground>
        <DivImage>
          <img src={img}></img>
        </DivImage>
        <Text>
          <h1>{name}</h1>
        </Text>
      </Divbackground>
    </>
  );
}
