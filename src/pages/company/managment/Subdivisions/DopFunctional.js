import React from 'react';
import { Pre, Contacts, AdditionalDivFunctional } from './departmentInformation/styles';
import TitleFun from '../../../../components/title';

export default function DopFunctional({ name, description, contacts }) {
  return (
    <AdditionalDivFunctional>
      <TitleFun color={'blue'} infoTitle={name}></TitleFun>
      <Pre>{description}</Pre>
      <Contacts>{contacts}</Contacts>
    </AdditionalDivFunctional>
  );
}
