import React from "react";
import { Container } from "../styles";
import Header from "../../components/header";
import {Title} from "../Home/services/styles";
import {DivServices,ListServices} from "./styles";
import {data} from "../../assets/data_services"
import ServicesList from "./servicesList";
export default function Services () {
  return (
    <Container>
      <Header backgroundHeader={"gray"}></Header>
      <Title>УСЛУГИ РЕСПУБЛИКАНСКОГО УНИТАРНОГО ПРЕДПРИЯТИЯ “МИНГАЗ”</Title>
        <DivServices>
            {data.map((element)=> (
                <ServicesList

                    imgCard={element.cardImg}
                    nameCard={element.nameCard}
                    descName={element.cardDesc}
                    button={element.buttonCard}
                ></ServicesList>
            ))}
        </DivServices>
    </Container>
  )
}