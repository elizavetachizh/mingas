import React from 'react';
import { Container } from '../../styles';
import { Title } from '../../../Home/useful_information/styles';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import { Pre, Contacts } from './departmentInformation/styles';

export default function DopFunctional({ name, description, contacts }) {
  return (
    <Container>
      <AdditionalDiv>
        <Title>{name}</Title>
        <Pre>{description}</Pre>
        <Contacts>{contacts}</Contacts>
      </AdditionalDiv>
    </Container>
  );
}
