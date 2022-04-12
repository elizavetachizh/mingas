 import React from "react";
import Header from "../../components/header";
import { Container, HomeContainer } from "./styles";
 import ContentHome from "./Content";
 import UsefulInform from "./useful_information";
 import HomeServices from "./services";
 import ParallaxDiv from "./parallax";
 import News from "./News";
 import Footer from "../../components/footer";

 export default  function Home () {
  return (
    <Container>
      <Header></Header>
      <HomeContainer>
          <ContentHome></ContentHome>
          <UsefulInform></UsefulInform>
          <HomeServices></HomeServices>
          <ParallaxDiv></ParallaxDiv>
          <News></News>
      </HomeContainer>
        <Footer></Footer>
  </Container>
  )
 }