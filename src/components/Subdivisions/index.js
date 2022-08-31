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
import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router';

export default function Subdivisions() {
    const subdivisionId = useParams();
  const [info, setInfo] = useState([]);
    const object = Object.values(subdivisionId)
  useEffect(() => {
    if (+object[0]) {
      const current = subdivisions.filter((element) => element.id === +object[0]);
      setInfo(current);
    } else {
      setInfo(subdivisions);
    }
    window.scrollTo(0, 0);
  }, [subdivisionId, subdivisions]);
    console.log(object[0])
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      <AdditionalDiv>
        <DivBlocks>
          <ContainerInform>
            {info.map((el) => (
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
