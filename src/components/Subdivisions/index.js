import { Container } from '../../pages/company/styles';
import Header from '../header';
import { AdditionalDiv } from '../../pages/concats/GeneralContactInform/styles';
import {
  ContainerInform,
  DivBlocks,
} from '../administrativeServices/InformaationAdministrativeService/styles';
import { subdivisions } from '../../assets/data/subdivisions';
import DopFunctional from '../../pages/company/managment/Subdivisions/DopFunctional';
import ScrollToTop from 'react-scroll-up';
import up from '../../assets/png/up_arrow_round.png';
import Footer from '../footer';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router';

export default function Subdivisions() {
  const { subdivisionId } = useParams();
  // const navigate = useNavigate();
  // const Navigate = () => {
  //   navigate(`/company/management/:linkId/${subdivisions.id}`);
  //   subdivisions.id = subdivisionId;
  // };
  // Navigate();
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <ContainerInform>
            {subdivisions.map((el) => (
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
