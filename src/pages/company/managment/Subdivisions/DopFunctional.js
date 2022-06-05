import React from 'react';
import { Container } from '../../styles';

export default function DopFunctional({ id, name, description }) {
  return (
    <Container>
      <p>{id}</p>
      <p>{name}</p>
      <p>{description}</p>
    </Container>
  );
}
