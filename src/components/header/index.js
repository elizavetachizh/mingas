import React, { useCallback, useState } from 'react';
import {
  Container,
  Background,
  Menu,
  MenuClose,
  LinkLogo,
  Logo,
  ButtonsContainer,
  LinksContainer,
  CompanyButton,
  ServicesButton,
  ContactButton,
  PressCenterButtons,
  ServiceCenterButton,
  IconEye,
  Dropdown,
  DivButtonHeader,
} from './styles';
import HeaderLogo from '../../assets/png/mingaz_logo_color.png';
import eye from '../../assets/png/visibilityEye.png';
import menu from '../../assets/icons/menu.png';
import close from '../../assets/png/close.png';
import {
  CareerButton,
  DocumentsButton,
  HistoryButton,
  ManagementButton,
  StructureButton,
} from '../../pages/company/header_company/styles';
import { ButtonLink } from '../../pages/services/styles';
import {
  ConcatsButton,
  PhoneServicesButton,
  RequisitesButton,
  WorkScheduleButton,
} from '../../pages/concats/headerContacts/styles';
import MobileNavigation from './mobileNavigation';

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

  const [open, setOpen] = useState(false);

  const onClick = () => {
    console.log('hi');
    setOpen(!open);
  };
  const openMobile = (
    <Menu className={navbar && 'opacity'} onClick={onClick}>
      <img style={styleMenu} src={menu} />
    </Menu>
  );

  const closeMobile = (
    <MenuClose className={navbar && 'opacity'} onClick={onClick}>
      <img style={styleMenu} src={close} />
    </MenuClose>
  );

  const [isModalVisible, setModalVisible] = useState(true);
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);
  return (
    <Container backgroundHeader={backgroundHeader} className={navbar && 'opacity'}>
      <Background backgroundHeader={backgroundHeader} className={navbar && 'opacity'}>
        {open ? closeMobile : openMobile}
        {open && <MobileNavigation isModalVisible={true} handleCloseCLick={handleCloseCLick} />}
        <LinkLogo to="/">
          <Logo src={HeaderLogo} />
        </LinkLogo>
        <ButtonsContainer>
          <LinksContainer>
            <Dropdown>
              <CompanyButton to="/company/history">О предприятии</CompanyButton>
              <DivButtonHeader>
                <HistoryButton to="/company/history">История предприятия</HistoryButton>
                <ManagementButton to="/company/management">Руководство</ManagementButton>
                <StructureButton to="/company/structure">Структура предприятия</StructureButton>
                <CareerButton to="/company/career">Карерьера в УП "Мингаз"</CareerButton>
                <DocumentsButton to="/company/documentation">Документы</DocumentsButton>
              </DivButtonHeader>
            </Dropdown>

            <Dropdown>
              <ServicesButton to="/Services">Услуги</ServicesButton>
              <DivButtonHeader>
                <ButtonLink to={'/services/legal-entities'}>Для физических лиц</ButtonLink>
                <ButtonLink to={'/services/legal-entities'}>Для юридических лиц</ButtonLink>
              </DivButtonHeader>
            </Dropdown>

            <Dropdown>
              <ContactButton to="/Contacts">Контакты</ContactButton>
              <DivButtonHeader>
                <ConcatsButton to="/contacts">Контактная информация</ConcatsButton>
                <WorkScheduleButton to="/contacts/work-schedule">
                  График личного приёма граждан
                </WorkScheduleButton>
                <PhoneServicesButton to="/contacts/phone-services">
                  Телефоны служб по работе с клиентами
                </PhoneServicesButton>
                <RequisitesButton to="/contacts/requisites">Реквизиты предприятия</RequisitesButton>
              </DivButtonHeader>
            </Dropdown>

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
