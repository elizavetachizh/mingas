import React from "react";
import { Container } from "../../styles";
import Header from "../../../components/header";
import { Title } from "../../../components/header/styles";

export default function Application() {
  return (
    <Container>
      <Header backgroundHeader={"blue"}/>
      <Title>Заявка</Title>
    </Container>
  )
}