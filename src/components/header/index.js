import React, { useCallback, useState } from 'react';
import {
  Container,
  Background,
  Menu,
  MenuClose,
  LinkLogo,
  Logo,
  ButtonsContainer,
  CompanyButton,
  ServicesButton,
  ContactButton,
  PressCenterButtons,
  IconEye,
  Dropdown,
  DivButtonHeader,
  PersonalAccButton,
  GoBack,
  DivColumn,
  BackgroundText,
  DivFirstHeader,
  Div104,
  DivPersonalAcc
} from './styles';
import HeaderLogo from '../../assets/png/mingaz_logo_white.png';
import eye from '../../assets/png/visibilitys.png';
import menu from '../../assets/icons/menu.png';
import close from '../../assets/png/close.png';
import search from '../../assets/png/search.svg';
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
import { useNavigate } from 'react-router';
import personal from '../../assets/icons/user.png';
import { AutocompleteSuggestions, Button, Form, Input } from "../../pages/Home/Serch/styles";
import useMediaQuery from "../../pages/Home/parallax/useMediaQuery";
import { HiddenMenuTicker } from "./mobileNavigation/styles";
const styleMenu = {
  width: '30px',
  height: '30px',
};
const searchStyle = {
  backgroundImage: `url(${search})`,
};
const styleEye = {
  width:'32px'
}
export default function Header({ backgroundHeader }) {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const [isModalVisible, setModalVisible] = useState(true);
  const isPhone = useMediaQuery('(max-width: 900px)');
  const navigate = useNavigate();
  const changeBackground = () => {
    if(!isPhone) {
      if (window.scrollY >= 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    } else {
      setNavbar(false);
    }

  };
  window.addEventListener('scroll', changeBackground);

  const onClick = () => {
    setOpen(!open);
  };
  const openMobile = (
   <>
     <HiddenMenuTicker type={'checkbox'}></HiddenMenuTicker>
     <Menu className={navbar && 'opacity'} onClick={onClick}>
       <img style={styleMenu} src={menu} alt={''} />
     </Menu></>
  );

  const closeMobile = (
    <MenuClose className={navbar && 'opacity'} onClick={onClick}>
      <img style={styleMenu} src={close} alt="" />
    </MenuClose>
  );

  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  const { t } = useTranslation();
  return (
    <Container backgroundHeader={backgroundHeader}>
      <Background backgroundHeader={backgroundHeader} className={navbar && 'opacity'}>
        {open ? closeMobile : openMobile}
        {open && <MobileNavigation handleCloseCLick={handleCloseCLick} />}
        <BackgroundText>
          <LinkLogo to="/">
            <Logo src={HeaderLogo} />
          </LinkLogo>
          <DivColumn>
            <DivFirstHeader>
              <GoBack onClick={() => navigate(-1)}>Назад</GoBack>
              <Div104>
                <p>Аварийная служба</p>
                <a href={'tel:104'}>104</a>
              </Div104>

              <Language />
              <IconEye  href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}>
                <img style={styleEye} src={eye} alt="" />
              </IconEye>
              {/*<form action={'/search/'} method="get">*/}
              {/*  <fieldset>*/}
              {/*    <input type={'search'} placeholder={'поиск по сайту'} />*/}
              {/*    <span>*/}
              {/*      {' '}*/}
              {/*      <img src={search} />*/}
              {/*    </span>*/}
              {/*  </fieldset>*/}
              {/*</form>*/}
              <Form>
                <Input type={'text'} placeholder={'Поиск по сайту'} />
                <AutocompleteSuggestions />
                <Button style={searchStyle} type={'submit'} />

              </Form>
              {/*<Searchicon></Searchicon>*/}
              <DivPersonalAcc>
                <img src={personal} />
                <PersonalAccButton to={'/Personal'}>{t('header:PersonalArea')}</PersonalAccButton>
              </DivPersonalAcc>
            </DivFirstHeader>
            <ButtonsContainer>
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

              {/*<Dropdown>*/}
              {/*  <ServicesButton to="/feedback/online-application">*/}
              {/*    {t('header:feedback')}*/}
              {/*  </ServicesButton>*/}
              {/*  <DivButtonHeader>*/}
              {/*    <ButtonLink to={'/feedback/reception-of-citizens'}>Приём граждан</ButtonLink>*/}
              {/*    <ButtonLink to={'/feedback/question-answer'}>Вопрос-ответ</ButtonLink>*/}
              {/*    <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>*/}
              {/*    <ButtonLink to={'/feedback/online-application'}>Онлайн заявка</ButtonLink>*/}
              {/*  </DivButtonHeader>*/}
              {/*</Dropdown>*/}

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
                  <RequisitesButton to="/contacts/requisites">
                    Реквизиты предприятия
                  </RequisitesButton>
                </DivButtonHeader>
              </Dropdown>
              <ServicesButton to="/company/union">Профсоюз</ServicesButton>
              {/*<MingasShopBtn href={'https://mingas-shop.by/'}>Интернет-магазин</MingasShopBtn>*/}
            </ButtonsContainer>
          </DivColumn>
        </BackgroundText>
      </Background>
    </Container>
  );
}
