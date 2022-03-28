import React from "react";
import { Container } from "./styles";
import Header from "../../components/header";
export default function Company () {
  return (
    <Container>
      <Header currentPage={"Company"}></Header>
      <h1>Company</h1>
    </Container>
  )
}