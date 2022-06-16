import React from 'react';
import { Title } from '../../Home/useful_information/styles';
import { DescriptionService } from './styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
export default function DopFunctionService({ name, description }) {
  return (
    <AdditionalDiv>
      <Title>{name}</Title>
      <DescriptionService>{description}</DescriptionService>
    </AdditionalDiv>
  );
}
