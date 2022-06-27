import React from 'react';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import TitleFun from '../../../../components/title';
import { DescriptionService } from '../../DopFunction/styles';

export default function DopFunctionServiceForLegalEntities({ name, description }) {
  return (
    <AdditionalDiv>
      <TitleFun color={'blue'} infoTitle={name} />
      <DescriptionService>{description}</DescriptionService>
    </AdditionalDiv>
  );
}
