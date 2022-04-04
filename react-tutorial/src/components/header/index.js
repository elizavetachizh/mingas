import React, {useState} from "react";
import { Container, Background, LinkLogo, Logo, Title, ButtonsContainer,LinksContainer,CompanyButton,ServicesButton,ContactButton,PressCenterButtons,ServiceCenterButton } from "./styles";
import HeaderLogo from "../../assets/png/mingaz_logo_color.png"
import ButtonFun from "../button";

export default function Header ({ currentPage }) {

    const [navbar, setNavbar] = useState(false);
    const changeBackground = () => {
        console.log(window.scrollY)
        if(window.scrollY >= 80) {
            setNavbar(true)

        } else {
        setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground)

  return(
    <Container className={navbar && `active`}>
     <Background className={navbar && `active`}>
         <LinkLogo  to ="/">
             <Logo className={navbar && `active`} src={HeaderLogo}></Logo>
         </LinkLogo>

         <Title>{currentPage}</Title>
         <ButtonsContainer >
             <LinksContainer>
                 <CompanyButton className={navbar && `active`} to="/Company">О предприятии</CompanyButton>
                 <ServicesButton className={navbar && `active`} to="/Services">Услуги</ServicesButton>
                 <ContactButton className={navbar && `active`} to="/Contacts">Контакты</ContactButton>
                 <PressCenterButtons className={navbar && `active`} to="/Press-Center">Пресс-центр</PressCenterButtons>
                 <ServiceCenterButton className={navbar && `active`} to="/Service-Center">Сервисный центр</ServiceCenterButton>
             </LinksContainer>
             <ButtonFun  backgroundColor={"blue"} infoButton={"Личный кабинет"}></ButtonFun>
         </ButtonsContainer>
     </Background>
    </Container>
  )
}