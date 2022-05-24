import React from 'react';
import { Container } from '../../styles';
import Header from '../../../components/header';
import FormQuestion from "../../../components/formQuestion";

export default function ElectronicAppeal() {
  return (
    <Container>
      <Header backgroundHeader={'blue'}></Header>
      <FormQuestion />
    </Container>
  );
}
