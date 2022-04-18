 import React from "react";
import Header from "../../components/header";
import { Container, HomeContainer } from "./styles";
 import ContentHome from "./Content";
 import UsefulInform from "./useful_information";
 import HomeServices from "./services";
 import ParallaxDiv from "./parallax";
 import News from "./News";
 import Footer from "../../components/footer";
 import FormQuestion from "../../components/formQuestion";

 export default  function Home () {
  return (
    <Container>
      <Header></Header>
      <HomeContainer>
          <ContentHome></ContentHome>
          <UsefulInform></UsefulInform>
          <HomeServices></HomeServices>
          <ParallaxDiv></ParallaxDiv>
          <FormQuestion></FormQuestion>
          <News></News>
      </HomeContainer>
        <Footer></Footer>
  </Container>
  )
 }