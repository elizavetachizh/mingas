import React from 'react';
import { DescriptionService, ContainerFunctionService } from './styles';
import TitleFun from '../../../components/title';
export default function DopFunctionService({ name, description }) {
  return (
    <ContainerFunctionService>
      <TitleFun color={'blue'} infoTitle={name} />
      <DescriptionService>{description}</DescriptionService>
    </ContainerFunctionService>
  );
}
