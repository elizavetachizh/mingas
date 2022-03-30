import React from "react";
import { Container, LinkLogo, Logo, Title, ButtonsContainer,LinksContainer,CompanyButton,ServicesButton,ContactButton,PressCenterButtons,ServiceCenterButton } from "./styles";
import HeaderLogo from "../../assets/png/mingaz_logo_color.png"
import ButtonFun from "../button";

export default function Header ({ currentPage }) {
  return(
    <Container>
       <LinkLogo to ="/">
           <Logo  src={HeaderLogo}></Logo>
       </LinkLogo>

      <Title>{currentPage}</Title>
      <ButtonsContainer>
        <LinksContainer>
        <CompanyButton to="/Company">О предприятии</CompanyButton>
        <ServicesButton to="/Services">Услуги</ServicesButton>
        <ContactButton to="/Contacts">Контакты</ContactButton>
        <PressCenterButtons  to="/Press-Center">Пресс-центр</PressCenterButtons>
        <ServiceCenterButton to="/Service-Center">Сервисный центр</ServiceCenterButton>
        </LinksContainer>
        <ButtonFun  backgroundColor={"blue"} infoButton={"Личный кабинет"}></ButtonFun>
      </ButtonsContainer>
    </Container>
  )
}