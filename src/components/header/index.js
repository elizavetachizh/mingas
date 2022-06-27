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
import { AutocompleteSuggestions, Button, Form, Input } from '../../pages/Home/Serch/styles';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import { data } from '../../assets/data_services';
// const myRequest = new Request('../../assets/data_services');
const styleMenu = {
  width: '30px',
  height: '30px',
};
const searchStyle = {
  backgroundImage: `url(${search})`,
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
  const [input, setInput] = useState('');
  const { t } = useTranslation();

  // fetch(myRequest)
  //   .then(function (resp) {
  //     return resp.json();
  //   })
  //   .then(function (data) {
  //     console.log(data);
  //   });
  function onInputFun(event) {
    // console.log(this.value);
    const value = event.target.value.trim();
    if (value !== '') {
      data.forEach((element) => {
        console.log(element);

        if (element.nameCard.search(value) === -1) {
          console.log(element.nameCard);
          return (
            <div>
              {data.map((element) => (
                <div>
                  serviceId={element.serviceId}
                  imgCard={element.cardImg}
                  nameCard={element.nameCard}
                  description={element.description}
                </div>
              ))}
            </div>
          );
        }
        if (element.nameCard.search(value) === element.nameCard) {
          console.log(element);
        }
      });
    }
    setInput(event.target.value);
    console.log(event.target.value);
  }
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
              <GoBack onClick={() => navigate(-1)}>Назад</GoBack>
              <Div104>
                <p>Аварийная служба</p>
                <a href={'tel:104'}>104</a>
              </Div104>
              <Language />
              <IconEye href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}>
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
                <Input onChange={onInputFun} type={'text'} placeholder={'Поиск по сайту'} />
                <AutocompleteSuggestions />
                <Button style={searchStyle} type={'submit'} />
              </Form>
              {/*<Searchicon></Searchicon>*/}
              <PersonalAccButton to={'/Personal'}>
                <img src={personal} alt={''} />{' '}
                <DivPersonalAcc>{t('header:PersonalArea')}</DivPersonalAcc>
              </PersonalAccButton>
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
                  <ButtonLink to="/">Тарифы</ButtonLink>
                  <ButtonLink to="/">Графики</ButtonLink>
                  <ButtonLink to={'/feedback/online-application'}>Онлайн заявки</ButtonLink>
                  <ButtonLink to="/">Обратная связь</ButtonLink>
                  <ButtonLink to="/">Регламентирующие документы</ButtonLink>
                  <ButtonLink to={'/feedback/reception-of-citizens'}>Приём граждан</ButtonLink>
                  <ButtonLink to={'/feedback/question-answer'}>Часто задаваемые вопросы</ButtonLink>
                  <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
                  <ButtonLink to="/">Административные процедуры</ButtonLink>
                  <ButtonLink to="/residents/price">Прейскурант цен</ButtonLink>
                </DivButtonHeader>
              </Dropdown>

              <Dropdown>
                <ServicesButton to="/services/legal-entities">Для бизнеса</ServicesButton>
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
