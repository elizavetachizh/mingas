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
  UnionButton,
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
import { Trans, useTranslation } from 'react-i18next';

const styleMenu = {
  width: '30px',
  height: '30px',
};

export default function Header({ backgroundHeader }) {
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
      <img style={styleMenu} src={menu} alt={''} />
    </Menu>
  );

  const closeMobile = (
    <MenuClose className={navbar && 'opacity'} onClick={onClick}>
      <img style={styleMenu} src={close} alt="" />
    </MenuClose>
  );

  const [isModalVisible, setModalVisible] = useState(true);
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  const { t } = useTranslation();
  return (
    <Container backgroundHeader={backgroundHeader}>
      <Background backgroundHeader={backgroundHeader} className={navbar && 'opacity'}>
        {open ? closeMobile : openMobile}
        {open && <MobileNavigation isModalVisible={true} handleCloseCLick={handleCloseCLick} />}
        <LinkLogo to="/">
          <Logo src={HeaderLogo} />
        </LinkLogo>
        <ButtonsContainer>
          <LinksContainer>
            <Dropdown>
              <CompanyButton to="/company/history">
                <Trans i18nKey="header:ABOUTTHEENTERPRISE"></Trans>
              </CompanyButton>
              <DivButtonHeader>
                <HistoryButton to="/company/history">История предприятия</HistoryButton>
                <ManagementButton to="/company/management">Руководство</ManagementButton>
                <StructureButton to="/company/structure">Структура предприятия</StructureButton>
                <CareerButton to="/company/career">Карерьера в УП "Мингаз"</CareerButton>
                <DocumentsButton to="/company/documentation">Документы</DocumentsButton>
                <UnionButton to="/company/union">Профсоюз</UnionButton>
              </DivButtonHeader>
            </Dropdown>

            <Dropdown>
              <ServicesButton to="/services">{t('header:Services')}</ServicesButton>
              <DivButtonHeader>
                <ButtonLink to="/services/legal-entities">Для физических лиц</ButtonLink>
                <ButtonLink to="/services/legal-entities">Для юридических лиц</ButtonLink>
              </DivButtonHeader>
            </Dropdown>

            <Dropdown>
              <ServicesButton to="/feedback">{t('header:feedback')}</ServicesButton>
              <DivButtonHeader>
                <ButtonLink to={'/feedback/reception-of-citizens'}>Приём граждан</ButtonLink>
                <ButtonLink to={'/feedback/question-answer'}>Вопрос-ответ</ButtonLink>
                <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
                <ButtonLink to={'/feedback/application'}>Онлайн заявка</ButtonLink>
              </DivButtonHeader>
            </Dropdown>

            <PressCenterButtons to="/Press-Center">{t('header:PressCenter')}</PressCenterButtons>

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
          </LinksContainer>
          <PersonalAccButton to={'/Personal'}>{t('header:PersonalArea')}</PersonalAccButton>
          <Language />
          <IconEye href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}>
            <img src={eye} alt="" />
          </IconEye>
        </ButtonsContainer>
      </Background>
    </Container>
  );
}
