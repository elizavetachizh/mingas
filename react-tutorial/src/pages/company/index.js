import React from "react";
import { Container } from "./styles";
import Header from "../../components/header";
import ContentHome from "../Home/Content";
export default function Company () {
  return (
    <Container>
      <Header currentPage={"Company"}></Header>
      <h1>Company</h1>
        <ContentHome></ContentHome>
    </Container>
  )
}