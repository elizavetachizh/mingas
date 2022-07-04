import React from 'react';
import { DivApplication } from '../styles';
import TitleFun from '../../../../components/title';
import control from '../../../../assets/png/control.png';
import { LinkToCallRepresentative } from './styles';
export default function ApplicationToCallRepresentativeOfGasSupplyOrganization() {
  return (
    <DivApplication>
      <TitleFun
        color={'blue'}
        infoTitle={'  Заявка на вызов представителя газоснабжающей организации'}
      />
      <LinkToCallRepresentative href={'https://gasification.mingas.by:5003/'}>
        <img src={control} alt={''}/>
        Оставить заявку
      </LinkToCallRepresentative>
    </DivApplication>
  );
}
