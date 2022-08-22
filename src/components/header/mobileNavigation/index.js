import {
  CompanyButton,
  ContactButton,
  DivButtonHeader,
  Dropdown,
  LinksContainer,
  PressCenterButtons,
  ServicesButton,
  DivBlocksHeader,
} from './styles';
import { ButtonLink } from '../../../pages/services/styles';
import React, { useState } from 'react';
import { Trans } from 'react-i18next';
import { t } from 'i18next';
import next from '../../../assets/png/next.png';
import { NavLink } from 'react-router-dom';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBtn, setIsOpenBtn] = useState(false);
  const [isOpenBtnForBusiness, setIsOpenBtnForBusiness] = useState(false);
  // const [isHandleBtn, setIsHandleBtn] = useState(false);
  // const handleBtn = () => {
  //   setIsHandleBtn(true);
  // };
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const animateOpenBtn = () => {
    setIsOpenBtn(true);
    if (isOpenBtn) {
      setIsOpenBtn(false);
    }
  };
  const animateOpenBtnForBusiness = () => {
    setIsOpenBtnForBusiness(true);
    if (isOpenBtnForBusiness) {
      setIsOpenBtnForBusiness(false);
    }
  };
  return (
    <LinksContainer>
      <Dropdown>
        <DivBlocksHeader>
          {' '}
          <CompanyButton className={isOpen && `handleBtn`} to="/company/history">
            <Trans i18nKey="header:ABOUTTHEENTERPRISE" />
          </CompanyButton>
          <div>
            {isOpen ? <IoIosArrowUp onClick={animate} /> : <IoIosArrowDown onClick={animate} />}
          </div>
        </DivBlocksHeader>
        <DivButtonHeader className={isOpen && `handleBtn`}>
          <ButtonLink to="/company/history">История предприятия</ButtonLink>
          <ButtonLink to="/company/management">Руководство предприятия</ButtonLink>
          <ButtonLink to="/company/career">Работа в УП "Мингаз"</ButtonLink>
          <ButtonLink to="/company/parent-organizations">Вышестоящие организации</ButtonLink>
          <ButtonLink to="/company/branches/ogonek" style={{ width: '100%' }}>
            Филиалы УП "Мингаз" <img alt={''} src={next} />
            <span style={{ margin: '20% 0 0' }}>
              <NavLink to="/company/branches/ogonek">
                Филиал оздоровительный комплекс "Огонёк"
              </NavLink>
              <NavLink to="/company/branches/Bubni">Филиал "Бубны"</NavLink>
              <NavLink to="/company/branches/TBZ">
                Филиал "Торфобрикетный завод "Сергеевическое"
              </NavLink>
            </span>
          </ButtonLink>
          <ButtonLink to="/company/documentation">Сертификаты, лицензии, свидетельства</ButtonLink>
          <ButtonLink to="/company/gratitude">Благодарности и награды</ButtonLink>
        </DivButtonHeader>
      </Dropdown>

      <Dropdown>
        <DivBlocksHeader>
          {' '}
          <CompanyButton className={isOpenBtn && `handleBtn`} to="/services">{t('header:Services')}</CompanyButton>
          <div>
            {isOpenBtn ? (
              <IoIosArrowUp onClick={animateOpenBtn} />
            ) : (
              <IoIosArrowDown onClick={animateOpenBtn} />
            )}
          </div>
        </DivBlocksHeader>
        <DivButtonHeader className={isOpenBtn && `handleBtn`}>
        <div>  <ButtonLink to="/services">
          Услуги <img alt={''} src={next} />
          <span>
              <NavLink to="/services/administrative-services">Административные процедуры</NavLink>
              <NavLink to="/residents/price">Прейскурант цен</NavLink>
              <NavLink to="/">Плановые работы</NavLink>
            </span>
        </ButtonLink>
          <ButtonLink to={'/feedback/online-application'}>Онлайн заявки</ButtonLink>
          <ButtonLink to="/regulatory-documents">Регламентирующие документы</ButtonLink>
          <ButtonLink to={'/feedback/reception-of-citizens'}>Приём граждан</ButtonLink>
          <ButtonLink to={'/feedback/question-answer/1'}>Часто задаваемые вопросы</ButtonLink>
          <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
          <ButtonLink to={'/feedback/leave-feedback'}>Оставить отзыв</ButtonLink></div>
        </DivButtonHeader>
      </Dropdown>

      <Dropdown>
        <DivBlocksHeader>
          {' '}
          <CompanyButton className={isOpenBtnForBusiness && `handleBtn`} to="/services-legal-entities">
            Для бизнеса{' '}
            <div>
              {' '}
              {isOpenBtnForBusiness ? (
                <IoIosArrowUp onClick={animateOpenBtnForBusiness} />
              ) : (
                <IoIosArrowDown onClick={animateOpenBtnForBusiness} />
              )}
            </div>
          </CompanyButton>
        </DivBlocksHeader>
        <DivButtonHeader className={isOpenBtnForBusiness && `handleBtn`}>
          <ButtonLink to="/services-legal-entities">Услуги</ButtonLink>
          <ButtonLink to="/feedback/electronic-appeal-for-entity">
            Обращение юридических лиц
          </ButtonLink>
          <ButtonLink to="/">Тендеры</ButtonLink>
          <ButtonLink to={'/feedback/question-answer/1'}>Вопрос-ответ</ButtonLink>
          <ButtonLink to="/services-legal-entities/administrative-services-legal/">
            Административные процедуры
          </ButtonLink>
          <ButtonLink to="/regulatory-documents-for-entity">Регламентирующие документы</ButtonLink>
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
