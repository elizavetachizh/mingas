import React from 'react';
import { Container } from '../../styles';

export default function DopFunctional({ fullName, position }) {
  return (
    <Container>
      <p>{fullName}</p>
      <p>{position}</p>
    </Container>
  );
}
