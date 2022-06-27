import React from 'react';
import { DescriptionService } from './styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleFun from '../../../components/title';
export default function DopFunctionService({ name, description }) {
  return (
    <AdditionalDiv>
      <TitleFun color={'blue'} infoTitle={name} />
      <DescriptionService>{description}</DescriptionService>
    </AdditionalDiv>
  );
}
