import React from 'react';
import FormQuestion from '../../../components/formQuestion';
import { ContainerInform } from '../electronicCirculationForEntity/styles';
import ContainerContent from '../../../components/Container';
export default function ElectronicAppeal() {
  return (
    <ContainerContent
      name={'Электронное обращение физических лиц'}
      content={
        <ContainerInform>
          <FormQuestion />
        </ContainerInform>
      }
    />
  );
}
