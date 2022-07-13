import React, { useMemo, useState } from "react";
import { data } from '../../../assets/data_services';
import { useParams } from 'react-router-dom';
import DopFunctionService from '../DopFunction';
import { Container } from '../../company/styles';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import DopFunctionalHeader from "./DopFunctionalHeader";
import { DivServices } from "../styles";
import ServicesList from "../servicesList";

export default function NaturalGas() {

  const { nameCard } = useParams();
  const currentDepartment = useMemo(
    () => data.find((service) => service.nameCard === nameCard),
    [data]
  );
  return (
    <Container>
      <Header backgroundHeader={'blue'} />
      {/*<div>*/}
      {/*  {data.map((element) => (*/}
      {/*    <DopFunctionalHeader nameCard={element.nameCard}/>*/}
      {/*  ))}*/}
      {/*</div>*/}
      <DivServices>
        {data.map((element) => (
          <ServicesList
            serviceId={element.serviceId}
            imgCard={element.cardImg}
            nameCard={element.nameCard}
            description={element.description}
          />
        ))}
      </DivServices>
      <DopFunctionService
        name={currentDepartment.nameCard}
        description={currentDepartment.description}
      />
      <Footer />
    </Container>
  );
}
