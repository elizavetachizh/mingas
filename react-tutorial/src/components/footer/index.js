import React from "react";
import {
    ButtonsContainer,
    CompanyButton, ContactButton,
    Container,
    LinkLogo,
    LinksContainer,
    Logo, PressCenterButtons, ServiceCenterButton,
    ServicesButton,
    Title
} from "../header/styles";
import ButtonFun from "../button";
import HeaderLogo from "../../assets/png/mingaz_logo_color.png"

export default function Footer() {
    return(
        <Container>
            <LinkLogo to ="/">
                <Logo  src={HeaderLogo}></Logo>
            </LinkLogo>

            <ButtonsContainer>
                <LinksContainer>
                    <CompanyButton to="/Company">О предприятии</CompanyButton>
                    <ServicesButton to="/Services">Услуги</ServicesButton>
                    <ContactButton to="/Contacts">Контакты</ContactButton>
                    <PressCenterButtons  to="/Press-Center">Пресс-центр</PressCenterButtons>
                    <ServiceCenterButton to="/Service-Center">Сервисный центр</ServiceCenterButton>
                </LinksContainer>
                <ButtonFun infoButton={"Личный кабинет"}></ButtonFun>
            </ButtonsContainer>
        </Container>
    )
}