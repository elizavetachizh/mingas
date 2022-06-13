import React from 'react';
import { Pre, Contacts, AdditionalDivFunctional } from './departmentInformation/styles';
import TitleFun from '../../../../components/title';
import styleGraphic from '../../../../assets/background/style_graphic_photo-resizer.ru.png';
import Footer from '../../../../components/footer';
import { Container } from '../../../Home/styles';
const style = {
  background: `url(${styleGraphic}) no-repeat right`,
  right: 0,
};
export default function DopFunctional({ name, description, contacts }) {
  return (
    <Container>
      <AdditionalDivFunctional>
        <TitleFun color={'blue'} infoTitle={name}></TitleFun>
        <Pre>{description}</Pre>
        <Contacts>{contacts}</Contacts>
      </AdditionalDivFunctional>
      <Footer />
    </Container>
  );
}
