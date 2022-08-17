import { ContainerContent } from '../../../Home/Content/styles';
import { Parallax } from 'react-parallax';
import { Container } from '../../styles';
import React, { useState } from 'react';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';

export default function SchemaOfBranches({ background, description }) {
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <ContainerContent>
        <Parallax style={{ height: '560px' }} bgImage={background} strength={-300} />
      </ContainerContent>
      <AdditionalDiv>{description}</AdditionalDiv>
      <Footer />
    </Container>
  );
}
