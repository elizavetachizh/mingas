 import React from "react";
import Header from "../../components/header";
import { Container, HomeContainer } from "./styles";
 import ContentHome from "./Content";
 import UsefulInform from "./useful_information";
 import HomeServices from "./services";
 import ParallaxDiv from "./parallax";
 import News from "./News";
 import Footer from "../../components/footer";
 import SliderAuto from "./sliderAuto";

 export default  function Home () {
  return (
    <Container>
      <Header  currentPage={"Home"}></Header>
      <HomeContainer>
          <ContentHome></ContentHome>
          <SliderAuto></SliderAuto>
          <UsefulInform></UsefulInform>
          <HomeServices></HomeServices>
          <ParallaxDiv></ParallaxDiv>
          <News></News>
      </HomeContainer>
        <Footer></Footer>
  </Container>
  )
 }