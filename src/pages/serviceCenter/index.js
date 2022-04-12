import React from "react";
import { Container } from "../styles";
import Header from "../../components/header";
export default function ServiceCenter () {
  return (
    <Container>
      <Header  currentPage={"ServiceCenter"}></Header>
      <h1>Сервисный центр</h1>
    </Container>
  )
}