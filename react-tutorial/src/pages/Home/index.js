 import React from "react";
import Header from "../../components/header";
import { Container, HomeContainer } from "./styles";
 import ContentHome from "./Content";
 import UsefulInform from "./useful_information";
 import HomeServices from "./services";

 export default  function Home () {
  return (
    <Container>
      <Header  currentPage={"Home"}></Header>
      <HomeContainer>
          <ContentHome></ContentHome>
          <UsefulInform></UsefulInform>
          <HomeServices></HomeServices>
      </HomeContainer>
  </Container>
  )
 }