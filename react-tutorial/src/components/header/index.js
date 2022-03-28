import React from "react";
import { Container, Logo, Title, ButtonsContainer,LinksContainer,CompanyButton,ServicesButton,ContactButton,PressCenterButtons,ServiceCenterButton,Account } from "./styles";
import HeaderLogo from "../../assets/png/mingaz_logo_color.png"

export default function Header ({ currentPage }) {
  return(
    <Container>
      <Logo to ="/" src={HeaderLogo}></Logo>
      <Title>{currentPage}</Title>
      <ButtonsContainer>
        <LinksContainer>
        <CompanyButton to="/Company">О предприятии</CompanyButton>
        <ServicesButton to="/Services">Услуги</ServicesButton>
        <ContactButton to="/Contacts">Контакты</ContactButton>
        <PressCenterButtons  to="/Press-Center">Пресс-центр</PressCenterButtons>
        <ServiceCenterButton to="/Service-Center">Сервисный центр</ServiceCenterButton>
        </LinksContainer>
        <Account>Личный кабинет</Account>
      </ButtonsContainer>
    </Container>
  )
}