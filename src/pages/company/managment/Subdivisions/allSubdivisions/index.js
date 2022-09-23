import { Container } from '../../../styles';
import Header from '../../../../../components/header';
import Footer from '../../../../../components/footer';
import { AdditionalDiv } from '../../../../concats/GeneralContactInform/styles';
import React, { useEffect } from 'react';
import { data } from '../../../../../assets/data/data_department';
import DopFunctional from '../DopFunctional';
import { ContainerInform } from '../../../../../components/administrativeServices/InformaationAdministrativeService/styles';

export default function AllSubdivisions() {
  const infoForSearch = data[0].information
    .concat(data[1].information)
    .concat(data[2].information)
    .concat(data[3].information)
    .concat(data[4].information)
    .concat(data[5].information)
    .concat(data[6].information)
    .concat(data[7].information);
  console.log(infoForSearch);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Header />
      <AdditionalDiv>
        <ContainerInform>
          <>
            {infoForSearch.map((el) => (
              <DopFunctional
                key={el.name}
                name={el.name}
                contacts={el.contacts}
                schedule={el.schedule}
                photo={el.photo}
                chief={el.chief}
                description={el.description}
              />
            ))}
          </>
        </ContainerInform>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
