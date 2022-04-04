import React from "react";
import {
    ButtonsContainer,
    CompanyButton, ContactButton,
    LinkLogo,
    LinksContainer,
    Logo, PressCenterButtons, ServiceCenterButton,
    ServicesButton,
    Title
} from "../header/styles";

import ButtonFun from "../button";
import HeaderLogo from "../../assets/png/mingaz_logo_color.png"
import telegram from '../../assets/icons/telegram.png'
import instagram from '../../assets/icons/instagram.png'
import viber from '../../assets/icons/viber.png'
import {Container,Contacts,Telephons, ContactInform,WorkTime,SocialMedia, Instagram,Telegram, Viber} from "./styles";

export default function Footer() {
    return(
        <Container>
            <LinkLogo to ="/">
                <Logo  src={HeaderLogo}></Logo>
            </LinkLogo>
            <ButtonsContainer>
                <ButtonFun backgroundColor={"gray"} infoButton={"Личный кабинет"}></ButtonFun>
            </ButtonsContainer>
            <Contacts>
                <Telephons>Телефоны для связи</Telephons>
                <ContactInform>Контактная информация</ContactInform>
                <WorkTime>График работы</WorkTime>
            </Contacts>
            <SocialMedia>
                <Instagram src={instagram}></Instagram>
                <Telegram src={telegram}></Telegram>
                <Viber src={viber}></Viber>
            </SocialMedia>
        </Container>
    )
}