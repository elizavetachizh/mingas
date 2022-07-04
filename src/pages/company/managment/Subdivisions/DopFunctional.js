import React from 'react';
import { Pre, Contacts } from './departmentInformation/styles';
import TitleFun from '../../../../components/title';
import Footer from '../../../../components/footer';
import { Container } from '../../../Home/styles';
import { AdditionalDiv } from "../../../concats/GeneralContactInform/styles";
export default function DopFunctional({ name, description, contacts }) {
  return (
    <Container>
      <AdditionalDiv>
        <TitleFun color={'blue'} infoTitle={name} />
        <Pre>{description}</Pre>
        <Contacts>{contacts}</Contacts>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
