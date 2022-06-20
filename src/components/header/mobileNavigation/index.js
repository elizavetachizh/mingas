import {
  CompanyButton,
  ContactButton,
  DivButtonHeader,
  Dropdown,
  LinksContainer,
  PressCenterButtons,
  FeedBackButton,
  ServicesButton,
  PersonalAccButton,
  HiddenMenuTicker,
} from './styles';
import {
  CareerButton,
  DocumentsButton,
  HistoryButton,
  ManagementButton,
  StructureButton,
  UnionButton,
} from '../../../pages/company/header_company/styles';
import { ButtonLink } from '../../../pages/services/styles';
import {
  ConcatsButton,
  PhoneServicesButton,
  RequisitesButton,
  WorkScheduleButton,
} from '../../../pages/concats/headerContacts/styles';
import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { t } from 'i18next';

export default function MobileNavigation() {
  return (
    <LinksContainer>
      <Dropdown>
        <CompanyButton to="/company/history">
          <Trans i18nKey="header:ABOUTTHEENTERPRISE"></Trans>
        </CompanyButton>
        <DivButtonHeader>
          <ButtonLink to="/company/history">История предприятия</ButtonLink>
          {/*<ManagementButton to="/company/management">Руководство</ManagementButton>*/}
          <ButtonLink to="/company/structure">Руководство предприятия</ButtonLink>
          <ButtonLink to="/company/career">Карьера в УП "Мингаз"</ButtonLink>
          <ButtonLink to="/company/branches">Филиалы УП "Мингаз"</ButtonLink>
          <ButtonLink to="/company/documentation">Документы</ButtonLink>
          {/*<UnionButton to="/company/union">Профсоюз</UnionButton>*/}
        </DivButtonHeader>
      </Dropdown>

      <Dropdown>
        <ServicesButton to="/services">{t('header:Services')}</ServicesButton>
        <DivButtonHeader>
          <ButtonLink to="/services">Услуги</ButtonLink>
          <ButtonLink to="/services/legal-entities">Тарифы</ButtonLink>
          <ButtonLink to="/">Графики</ButtonLink>
          <ButtonLink to={'/feedback/online-application'}>Онлайн заявки</ButtonLink>
          <ButtonLink to="/">Обратная связь</ButtonLink>
          <ButtonLink to="/">Регламентирующие документы</ButtonLink>
          <ButtonLink to={'/feedback/reception-of-citizens'}>Приём граждан</ButtonLink>
          <ButtonLink to={'/feedback/question-answer'}>Часто задаваемые вопросы</ButtonLink>
          <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
          <ButtonLink to="/">Административные процедуры</ButtonLink>
          <ButtonLink to="/">Прейскурант цен</ButtonLink>
        </DivButtonHeader>
      </Dropdown>

      <Dropdown>
        <ServicesButton to="/services">Для бизнеса</ServicesButton>
        <DivButtonHeader>
          <ButtonLink to="/services/legal-entities">Услуги</ButtonLink>
          <ButtonLink to="/">Обратная связь</ButtonLink>
          <ButtonLink to="/">Тендеры</ButtonLink>
          <ButtonLink to={'/feedback/question-answer'}>Часто задаваемые вопросы</ButtonLink>
          <ButtonLink to="/">Административные процедуры</ButtonLink>
          <ButtonLink to="/">Регламинтирующие документы</ButtonLink>
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
      <ServicesButton to="/company/union">Профсоюз</ServicesButton>
    </LinksContainer>
  );
}
