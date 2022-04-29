import React, { useState } from 'react';
import {
  Container,
  Background,
  Menu,
  LinkLogo,
  Logo,
  Title,
  ButtonsContainer,
  LinksContainer,
  CompanyButton,
  ServicesButton,
  ContactButton,
  PressCenterButtons,
  ServiceCenterButton,
  IconEye,
} from './styles';
import HeaderLogo from '../../assets/png/mingaz_logo_color.png';
import eye from '../../assets/png/visibilityEye.png';
import HeaderCompany from '../../pages/company/header_company';
import menu from '../../assets/icons/menu.png';
import { DivButton } from '../../pages/company/header_company/styles';

const styleMenu = {
  width: '30px',
  height: '30px',
};

export default function Header({ currentPage, backgroundHeader }) {
  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);
  const [hover, setHover] = useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    console.log('click');
  };
  return (
    <Container backgroundHeader={backgroundHeader} className={navbar && 'opacity'}>
      <Menu>
        <img style={styleMenu} src={menu} />
      </Menu>
      <Background
        backgroundHeader={backgroundHeader}
        className={(navbar && 'opacity') || (click && 'click')}
      >
        <LinkLogo to="/">
          <Logo src={HeaderLogo} />
        </LinkLogo>
        <Title>{currentPage}</Title>
        <ButtonsContainer>
          <LinksContainer>
            <CompanyButton
              className={hover && 'drop-menu'}
              onMouseOver={handleHover}
              to="/company/history"
            >
              О предприятии
            </CompanyButton>
            <ServicesButton to="/Services">Услуги</ServicesButton>
            <ContactButton to="/Contacts">Контакты</ContactButton>
            <PressCenterButtons to="/Press-Center">Пресс-центр</PressCenterButtons>
            <ServiceCenterButton to="/Service-Center">Сервисный центр</ServiceCenterButton>
          </LinksContainer>
          {/*<PersonalAccButton href={'/profile'}>Личный кабинет</PersonalAccButton>*/}
          <IconEye src={eye} />
        </ButtonsContainer>
      </Background>
    </Container>
  );
}
