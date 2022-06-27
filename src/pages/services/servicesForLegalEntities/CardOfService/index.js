import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../../../assets/data_service_legalEntities_general';
import { Container } from '../../../company/styles';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import DopFunctionService from '../../DopFunction';

export default function CardOfService() {
  const { nameCard } = useParams();
  const currentDepartment = useMemo(
    () => data.find((service) => service.nameCard === nameCard),
    [data]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'}></Header>
      <DopFunctionService
        name={currentDepartment.nameCard}
        description={currentDepartment.description}
      />
      <Footer />
    </Container>
  );
}
