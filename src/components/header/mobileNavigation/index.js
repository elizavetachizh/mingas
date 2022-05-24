import {
  ButtonsContainer,
  CompanyButton,
  ContactButton,
  DivButtonHeader,
  Dropdown,
  LinksContainer,
  PressCenterButtons,
  FeedBackButton,
  ServicesButton,
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
import React from 'react';

export default function MobileNavigation() {
  return (
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
            <UnionButton to="/company/union">Профсоюз</UnionButton>
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
        <FeedBackButton to="/feedback">Обратная связь</FeedBackButton>
      </LinksContainer>
    </ButtonsContainer>
  );
}
