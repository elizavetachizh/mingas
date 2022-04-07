import React, {useState} from "react";
import {HeaderDiv, Container, Background, LinkLogo, Logo, Title, ButtonsContainer,LinksContainer,CompanyButton,ServicesButton,ContactButton,PressCenterButtons,ServiceCenterButton } from "./styles";
import HeaderLogo from "../../assets/png/mingaz_logo_color.png"
import ButtonFun from "../button";

export default function Header ({ currentPage, backgroundHeader }) {

    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        if(window.scrollY >= 80) {
            setNavbar(true)

        } else {
        setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

  return(
<HeaderDiv backgroundHeader={backgroundHeader}>
    <Container  className={navbar && `active`}>
        <Background className={navbar && `active`}>
            <LinkLogo to ="/">
                <Logo src={HeaderLogo}></Logo>
            </LinkLogo>

            <Title>{currentPage}</Title>
            <ButtonsContainer >
                <LinksContainer>
                    <CompanyButton to="/company/history">О предприятии</CompanyButton>
                    <ServicesButton to="/Services">Услуги</ServicesButton>
                    <ContactButton to="/Contacts">Контакты</ContactButton>
                    <PressCenterButtons to="/Press-Center">Пресс-центр</PressCenterButtons>
                    <ServiceCenterButton to="/Service-Center">Сервисный центр</ServiceCenterButton>
                </LinksContainer>
                <ButtonFun  backgroundColor={"border"} infoButton={"Личный кабинет"}></ButtonFun>
            </ButtonsContainer>
        </Background>
    </Container>
</HeaderDiv>
  )
}