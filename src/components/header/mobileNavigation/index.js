import {
  CompanyButton,
  ContactButton,
  DivButtonHeader,
  Dropdown,
  LinksContainer,
  PressCenterButtons,
  ServicesButton
} from "./styles";
import { ButtonLink } from '../../../pages/services/styles';
import React from 'react';
import { Trans } from 'react-i18next';
import { t } from 'i18next';
import next from '../../../assets/png/next.png';
import { NavLink } from 'react-router-dom';
import { Container } from "../styles";

export default function MobileNavigation() {
  return (
    <LinksContainer>
     <Dropdown>
       <CompanyButton to="/company/history">
         <Trans i18nKey="header:ABOUTTHEENTERPRISE"></Trans>
       </CompanyButton>
       <DivButtonHeader>
         <ButtonLink to="/company/history">История предприятия</ButtonLink>
         <ButtonLink to="/company/structure">Руководство предприятия</ButtonLink>
         <ButtonLink to="/company/career">Карьера в УП "Мингаз"</ButtonLink>
         <ButtonLink to="/company/branches">Филиалы УП "Мингаз"</ButtonLink>
         <ButtonLink to="/company/documentation">Сертификаты, лицензии, свидетельства</ButtonLink>
         <ButtonLink to="/company/gratitude">Благодарности и награды</ButtonLink>
       </DivButtonHeader>
     </Dropdown>

     <Dropdown>
       <ServicesButton to="/services">{t('header:Services')}</ServicesButton>
       <DivButtonHeader>
         <ButtonLink to="/services">
           Услуги <img alt={''} src={next} />
           <span>
              <NavLink to="/services/administrative-services">Административные процедуры</NavLink>
              <NavLink to="/residents/price">Прейскурант цен</NavLink>
              <NavLink to="/">Плановые работы</NavLink>
            </span>
         </ButtonLink>
         <ButtonLink to="/liquefied-gas-tariff">
           Тарифы
           <img alt={''} src={next} />
           <span>
              <NavLink to="/liquefied-gas-tariff">Тарифы на сжиженный газ</NavLink>
              <NavLink to="/natural-gas-tariff">Тарифы на природный газ</NavLink>
            </span>
         </ButtonLink>
         <ButtonLink to={'/feedback/online-application'}>Онлайн заявки</ButtonLink>
         {/*<ButtonLink to="/">Обратная связь</ButtonLink>*/}
         <ButtonLink to="/">Регламентирующие документы</ButtonLink>
         <ButtonLink to={'/feedback/reception-of-citizens'}>Приём граждан</ButtonLink>
         <ButtonLink to={'/feedback/question-answer'}>Часто задаваемые вопросы</ButtonLink>
         <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
       </DivButtonHeader>
     </Dropdown>

     <Dropdown>
       <ServicesButton to="/services-legal-entities">Для бизнеса</ServicesButton>
       <DivButtonHeader>
         <ButtonLink to="/services-legal-entities">Услуги</ButtonLink>
         <ButtonLink to="/feedback/electronic-appeal-for-entity">
           Обращение юридических лиц
         </ButtonLink>
         <ButtonLink to="/">Тендеры</ButtonLink>
         <ButtonLink to={'/feedback/question-answer'}>Вопрос-ответ</ButtonLink>
         <ButtonLink to="/services-legal-entities/administrative-services-legal/">
           Административные процедуры
         </ButtonLink>
         <ButtonLink to="/">Регламентирующие документы</ButtonLink>
       </DivButtonHeader>
     </Dropdown>

     <PressCenterButtons to="/Press-Center">{t('header:PressCenter')}</PressCenterButtons>
     <Dropdown>
       <ContactButton to="/Contacts">{t('header:Contacts')}</ContactButton>
       <DivButtonHeader>
         <ButtonLink to="/contacts">Контактная информация</ButtonLink>
         <ButtonLink to="/contacts/work-schedule">График личного приёма граждан</ButtonLink>
         <ButtonLink to="/contacts/phone-services">
           Телефоны служб по работе с клиентами
         </ButtonLink>
         <ButtonLink to="/contacts/requisites">Реквизиты предприятия</ButtonLink>
       </DivButtonHeader>
     </Dropdown>
     <ServicesButton to="/company/union">Профсоюз</ServicesButton>
   </LinksContainer>
  );
}
