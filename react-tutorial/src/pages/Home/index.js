 import React from "react";
import Header from "../../components/header";
import { Container, HomeContainer } from "./styles";

 export default  function Home () {
  return (
    <Container>
      <Header  currentPage={"Home"}></Header>
      <HomeContainer>
        <h1>Home</h1>
      </HomeContainer>
  </Container>
  )
 }