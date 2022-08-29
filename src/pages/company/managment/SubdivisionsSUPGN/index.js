import { Container } from '../../styles';
import Header from '../../../../components/header';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import {
  ContainerInform,
  DivBlocks,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import DopFunctional from '../Subdivisions/DopFunctional';
import ScrollToTop from 'react-scroll-up';
import up from '../../../../assets/png/up_arrow_round.png';
import Footer from '../../../../components/footer';
import React, { useEffect } from 'react';
import { subdivisionsSUPGN } from '../../../../assets/data/subdivisionsSUPGN';

export default function SubdivisionsSUPGN() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <ContainerInform>
            {subdivisionsSUPGN.map((el) => (
              <DopFunctional
                name={el.name}
                contacts={el.contacts}
                schedule={el.schedule}
                photo={el.photo}
                chief={el.chief}
                description={el.description}
              />
            ))}
          </ContainerInform>
        </DivBlocks>
      </AdditionalDiv>
      <ScrollToTop showUnder={160}>
        <img src={up} alt={''} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
