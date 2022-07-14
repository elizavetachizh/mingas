import React, { useState } from 'react';
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
  DivPersonalAcc,
  DivPhone,
} from './styles';
import HeaderLogo from '../../assets/png/mingaz_logo_white.png';
import eye from '../../assets/png/visibilitys.png';
import next from '../../assets/png/next.png';
import menu from '../../assets/icons/menu.png';
import close from '../../assets/png/close.png';
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
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import { NavLink } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage';
const styleMenu = {
  width: '30px',
  height: '30px',
};
const styleEye = {
  width: '32px',
};
export default function Header({ backgroundHeader }) {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const isPhone = useMediaQuery('(max-width: 900px)');
  const navigate = useNavigate();
  const changeBackground = () => {
    if (!isPhone) {
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
    <Menu onClick={onClick}>
      <img style={styleMenu} src={menu} alt={''} />
    </Menu>
  );

  const closeMobile = (
    <MenuClose onClick={onClick}>
      <img style={styleMenu} src={close} alt="" />
    </MenuClose>
  );
  const { t } = useTranslation();

  return (
    <Container backgroundHeader={backgroundHeader}>
      <Background backgroundHeader={backgroundHeader} className={navbar && 'opacity'}>
        {open ? closeMobile : openMobile}
        {open && <MobileNavigation />}
        <BackgroundText>
          <LinkLogo to="/">
            <Logo src={HeaderLogo} />
          </LinkLogo>
          <DivColumn>
            <DivFirstHeader>
              {/*<GoBack onClick={() => navigate(-1)}>Назад</GoBack>*/}
              <DivPhone>
                <Div104>
                  <p>
                    Аварийная
                    <br /> служба
                  </p>
                  <a href={'tel:104'}>104</a>
                </Div104>
                <Div104>
                  <p>
                    Контакт-центр <br /> УП "МИНГАЗ"
                  </p>
                  <a href={'tel:102'}>162</a>
                </Div104>
              </DivPhone>
              <PersonalAccButton href={'https://service.mingas.by:5200/'}>
                <img src={personal} alt={''} />
                <DivPersonalAcc>{t('header:PersonalArea')}</DivPersonalAcc>
              </PersonalAccButton>
              <SearchPage />
              <Language />
              <IconEye href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}>
                <img style={styleEye} src={eye} alt="" />
              </IconEye>
            </DivFirstHeader>
            <ButtonsContainer>
              <Dropdown>
                <CompanyButton to="/company/history">
                  <Trans i18nKey="header:ABOUTTHEENTERPRISE"></Trans>
                </CompanyButton>
                <DivButtonHeader>
                  <ButtonLink to="/company/history">История предприятия</ButtonLink>
                  <ButtonLink to="/company/management">Руководство предприятия</ButtonLink>
                  <ButtonLink to="/company/career">Работа в УП "Мингаз"</ButtonLink>
                  <ButtonLink to="/company/branches">Филиалы УП "Мингаз"</ButtonLink>
                  <ButtonLink to="/company/documentation">
                    Сертификаты, лицензии, свидетельства
                  </ButtonLink>
                  <ButtonLink to="/company/gratitude">Благодарности и награды</ButtonLink>
                  {/*<UnionButton to="/company/union">Профсоюз</UnionButton>*/}
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
                  <ButtonLink to="/feedback/electronic-appeal-for-entity">Обращение юридических лиц</ButtonLink>
                  <ButtonLink to="/">Тендеры</ButtonLink>
                  <ButtonLink to={'/feedback/question-answer'}>Вопрос-ответ</ButtonLink>
                  <ButtonLink to="/">Административные процедуры</ButtonLink>
                  <ButtonLink to="/">Регламентирующие документы</ButtonLink>
                </DivButtonHeader>
              </Dropdown>

              <PressCenterButtons to="/Press-Center">{t('header:PressCenter')}</PressCenterButtons>
              <Dropdown>
                <ContactButton to="/Contacts">{t('header:Contacts')}</ContactButton>
                <DivButtonHeader>
                  <ButtonLink to="/contacts">Контактная информация</ButtonLink>
                  <ButtonLink to="/contacts/work-schedule">
                    График личного приёма граждан
                  </ButtonLink>
                  <ButtonLink to="/contacts/phone-services">
                    Телефоны служб по работе с клиентами
                  </ButtonLink>
                  <ButtonLink to="/contacts/requisites">
                    Реквизиты предприятия
                  </ButtonLink>
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
