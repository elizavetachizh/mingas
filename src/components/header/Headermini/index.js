import React, { useState } from 'react';
import HeaderLogo from '../../../assets/png/mingaz_logo_white.png';
import eye from '../../../assets/png/visibilityEye.png';
import {
  CareerButton,
  DocumentsButton,
  ManagementButton,
  StructureButton,
  UnionButton,
} from '../../../pages/company/header_company/styles';
import Language from '../language';
import { Trans, useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import {
  Background,
  ButtonsContainer,
  CompanyButton,
  Container,
  DivButtonHeader,
  Dropdown,
  LinkLogo,
  ServicesButton,
  ContactButton,
  PressCenterButtons,
  IconEye,
  LinksContainer,
  Logo,
  FirstDiv,
  PersonalAccButton,
  GoBack,
  MingasShopBtn,
} from './styles';
import { HistoryButton } from '../../../pages/company/history/styles';
import { ButtonLink } from '../../../pages/services/styles';
import { ConcatsButton } from '../../../pages/concats/headerContacts/styles';

export default function Headermini({ backgroundHeader }) {
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener('scroll', changeBackground);

  const { t } = useTranslation();
  return (
    <Container backgroundHeader={backgroundHeader}>
      <Background backgroundHeader={backgroundHeader} className={navbar && 'opacity'}>
        <FirstDiv>
          <LinkLogo to="/">
            <Logo src={HeaderLogo} />
          </LinkLogo>
          <GoBack onClick={() => navigate(-1)}>Назад</GoBack>
          <Language />
          <IconEye href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}>
            <img src={eye} alt="" />
          </IconEye>
        </FirstDiv>
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
                <CareerButton to="/company/career">Карьера в УП "Мингаз"</CareerButton>
                <CareerButton to="/company/branches">Филиалы УП "Мингаз"</CareerButton>
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
              <ServicesButton to="/feedback/online-application">
                {t('header:feedback')}
              </ServicesButton>
              <DivButtonHeader>
                <ButtonLink to={'/feedback/reception-of-citizens'}>Приём граждан</ButtonLink>
                <ButtonLink to={'/feedback/question-answer'}>Вопрос-ответ</ButtonLink>
                <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
                <ButtonLink to={'/feedback/online-application'}>Онлайн заявка</ButtonLink>
              </DivButtonHeader>
            </Dropdown>

            <PressCenterButtons to="/Press-Center">{t('header:PressCenter')}</PressCenterButtons>

            <Dropdown>
              <ContactButton to="/Contacts">{t('header:Contacts')}</ContactButton>
              <DivButtonHeader>
                <ConcatsButton to="/contacts">Контактная информация</ConcatsButton>
                {/*<WorkScheduleButton to="/contacts/work-schedule">*/}
                {/*  График личного приёма граждан*/}
                {/*</WorkScheduleButton>*/}
                {/*<PhoneServicesButton to="/contacts/phone-services">*/}
                {/*  Телефоны служб по работе с клиентами*/}
                {/*</PhoneServicesButton>*/}
                {/*<RequisitesButton to="/contacts/requisites">Реквизиты предприятия</RequisitesButton>*/}
              </DivButtonHeader>
            </Dropdown>
            <MingasShopBtn href={'https://mingas-shop.by/'}>Интернет-магазин</MingasShopBtn>
          </LinksContainer>
          <PersonalAccButton to={'/Personal'}>{t('header:PersonalArea')}</PersonalAccButton>
        </ButtonsContainer>
      </Background>
    </Container>
  );
}
