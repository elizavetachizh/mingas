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
  PersonalAccButton,
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
import Language from './language';
import { Trans, useTranslation } from "react-i18next";

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

  const { t, i18n  } = useTranslation();
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
              <CompanyButton to="/company/history"><Trans i18nKey="header:ABOUTTHEENTERPRISE"></Trans></CompanyButton>
              <DivButtonHeader>
                <HistoryButton to="/company/history">История предприятия</HistoryButton>
                <ManagementButton to="/company/management">Руководство</ManagementButton>
                <StructureButton to="/company/structure">Структура предприятия</StructureButton>
                <CareerButton to="/company/career">Карерьера в УП "Мингаз"</CareerButton>
                <DocumentsButton to="/company/documentation">Документы</DocumentsButton>
              </DivButtonHeader>
            </Dropdown>

            <Dropdown>
              <ServicesButton to="/Services">{t('header:Services')}</ServicesButton>
              <DivButtonHeader>
                <ButtonLink to={'/services/legal-entities'}>Для физических лиц</ButtonLink>
                <ButtonLink to={'/services/legal-entities'}>Для юридических лиц</ButtonLink>
              </DivButtonHeader>
            </Dropdown>

            <Dropdown>
              <ContactButton to="/Contacts">{t('header:Contacts')}</ContactButton>
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

            <PressCenterButtons to="/Press-Center">{t('header:PressCenter')}</PressCenterButtons>
            <ServiceCenterButton to="/Service-Center">{t('header:ServiceСenter')}</ServiceCenterButton>
          </LinksContainer>
          <PersonalAccButton to={'/Personal'}>{t('header:PersonalArea')}</PersonalAccButton>
          <Language />
        <IconEye href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}>
          <img  src={eye}/>
        </IconEye>
        </ButtonsContainer>
      </Background>
    </Container>
  );
}
