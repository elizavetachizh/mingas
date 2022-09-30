import React from 'react';
import { DivApplication } from '../styles';
import control from '../../../../assets/png/control.png';
import { LinkToCallRepresentative } from './styles';
import TitleForHome from '../../../../components/TitleForHome';
export default function ApplicationToCallRepresentativeOfGasSupplyOrganization() {
  return (
    <DivApplication>
      <TitleForHome
        color={'blue'}
        infoTitle={'Заявка на вызов представителя газоснабжающей организации'}
      />
      <LinkToCallRepresentative target={'_blank'} href={'https://gasification.mingas.by:5003/'}>
        <img src={control} alt={''} />
        Оставить заявку
      </LinkToCallRepresentative>
    </DivApplication>
  );
}
