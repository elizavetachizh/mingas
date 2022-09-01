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
import { ContainerElements, IoMdContacts, IoMdEyeOffs, PersonalAccButton } from '../styles';
import SearchPage from '../../../pages/SearchPage';
import Language from '../language';
export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBtn, setIsOpenBtn] = useState(false);
  const [isOpenBtnForBusiness, setIsOpenBtnForBusiness] = useState(false);
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
      <ContainerElements className={'mobile'}>
        {' '}
        <PersonalAccButton href={'https://service.mingas.by:5002/auth/login#login'}>
          {/*{navbar ? (*/}
          {/*  <IoMdContact style={{ width: '30px', height: '28px' }} color={'#0d4475'} />*/}
          {/*) : (*/}
          {/*  <IoMdContact style={{ width: '30px', height: '28px' }} color={'white'} />*/}
          {/*)}*/}
          <IoMdContacts className={'icon iconMobile'} />
          {/*<DivPersonalAcc>{t('header:PersonalArea')}</DivPersonalAcc>*/}
        </PersonalAccButton>
        <SearchPage />
        <Language />
        <IoMdEyeOffs
          className={'icon'}
          href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}
        />
      </ContainerElements>
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
          <ButtonLink to="/company/branches" style={{ width: '100%' }}>
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
          <CompanyButton className={isOpenBtn && `handleBtn`} to="/residents-of-the-capital-region">
            {t('header:Services')}
          </CompanyButton>
          <div>
            {isOpenBtn ? (
              <IoIosArrowUp onClick={animateOpenBtn} />
            ) : (
              <IoIosArrowDown onClick={animateOpenBtn} />
            )}
          </div>
        </DivBlocksHeader>
        <DivButtonHeader className={isOpenBtn && `handleBtn`}>
          <div>
            {' '}
            <ButtonLink to="/services">
              Услуги <img alt={''} src={next} />
              <span>
                <NavLink to="/services/administrative-services/">
                  Административные процедуры
                </NavLink>
                <NavLink to="/services/1">Газоснабжение потребителей</NavLink>
                <NavLink to="/services/3">Техническое обслуживание</NavLink>
                <NavLink to="/services/10">Реконструкция</NavLink>
                <NavLink to="/services/11">Газификация</NavLink>
                <NavLink to="/services/2">Обмен и покупка баллонов</NavLink>
                <NavLink to="/services/9">Цены на газ и услуги</NavLink>
                <NavLink to="/residents/price">Прейскурант цен</NavLink>
              </span>
            </ButtonLink>
            <ButtonLink to={'/feedback/online-application'}>Онлайн заявки</ButtonLink>
            <ButtonLink to="/regulatory-documents/1">Регламентирующие документы</ButtonLink>
            <ButtonLink to={'/feedback/reception-of-citizens'}>Приём граждан</ButtonLink>
            <ButtonLink to={'/feedback/question-answer/1'}>Часто задаваемые вопросы</ButtonLink>
            <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
            <ButtonLink to={'/feedback/leave-feedback'}>Оставить отзыв</ButtonLink>
          </div>
        </DivButtonHeader>
      </Dropdown>

      <Dropdown>
        <DivBlocksHeader>
          <CompanyButton className={isOpenBtnForBusiness && `handleBtn`} to="/for-business">
            Для бизнеса
            <div>
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
          <ButtonLink to="/tenders">Тендеры</ButtonLink>
          <ButtonLink to={'/feedback/question-answer/1'}>Вопрос-ответ</ButtonLink>
          <ButtonLink to="/services-legal-entities/administrative-services-legal/">
            Административные процедуры
          </ButtonLink>
          <ButtonLink to="/regulatory-documents-for-entity">Регламентирующие документы</ButtonLink>
        </DivButtonHeader>
      </Dropdown>

      <Dropdown>
        <PressCenterButtons to="/press-center/1">
          {t('header:PressCenter')}
          <span />
        </PressCenterButtons>
        <DivButtonHeader>
          <ButtonLink to="/press-center/1">СМИ о нас</ButtonLink>
          {/*<ButtonLink to="/press-center/2">Новости</ButtonLink>*/}
          <ButtonLink to="/press-center/3">Жизнь в стиле "Мингаз"</ButtonLink>
        </DivButtonHeader>
      </Dropdown>
      <Dropdown>
        <ContactButton to="/contacts/phone-services">{t('header:Contacts')}</ContactButton>
        <DivButtonHeader>
          {/*<ButtonLink to="/contacts/phone-services">Контактная информация</ButtonLink>*/}
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
