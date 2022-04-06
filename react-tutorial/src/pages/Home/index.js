 import React from "react";
import Header from "../../components/header";
import { Container, HomeContainer } from "./styles";
 import ContentHome from "./Content";
 import UsefulInform from "./useful_information";
 import HomeServices from "./services";
 import ParallaxDiv from "./parallax";
 import News from "./News";
 import Footer from "../../components/footer";
 import Carousel from "./slider";
 import {ItemOne, ItemThree, ItemTwo} from "./slider/styles";


 export default  function Home () {
  return (
    <Container>
      <Header  currentPage={"Home"}></Header>
      <HomeContainer>
          <ContentHome></ContentHome>
          <Carousel>
              <ItemOne>Item 1</ItemOne>
              <ItemTwo>Item 2</ItemTwo>
              <ItemThree>Item 3</ItemThree>
          </Carousel>
          <UsefulInform></UsefulInform>
          <HomeServices></HomeServices>
          <ParallaxDiv></ParallaxDiv>
          <News></News>
      </HomeContainer>
        <Footer></Footer>
  </Container>
  )
 }