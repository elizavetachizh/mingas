import React, { useState } from 'react';
import GlobalStyle, {
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
  Dropdown,
  DivButtonHeader,
  PersonalAccButton,
  DivColumn,
  BackgroundText,
  ContainerElements,
  DivFirstHeader,
  Div104,
  DivPhone,
  IoMdEyeOffs,
  IoMdContacts,
  IoIosMenus,
  IoIosCloses,
} from './styles';
import HeaderLogoBlue from '../../assets/png/mingaz_logo_white.png';
import next from '../../assets/png/next.png';
import { ButtonLink } from '../../pages/services/styles';
import MobileNavigation from './mobileNavigation';
import Language from './language';
import { Trans, useTranslation } from 'react-i18next';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import { NavLink } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage';

export default function Header({ backgroundHeader }) {
  const [navbar, setNavbar] = useState(false);
  const [open, setOpen] = useState(false);
  const isPhone = useMediaQuery('(max-width: 900px)');
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
    if (open) {
      document.body.classList.remove('mobile');
    } else {
      document.body.classList.add('mobile');
    }
    // document.body.style.position = 'fixed';
  };
  const openMobile = (
    <Menu onClick={onClick}>
      <IoIosMenus />
    </Menu>
  );

  const closeMobile = (
    <MenuClose onClick={onClick}>
      <IoIosCloses />
    </MenuClose>
  );
  const { t } = useTranslation();

  return (
    <Container backgroundHeader={backgroundHeader}>
      <GlobalStyle />
      <Background backgroundHeader={backgroundHeader}>
        {open && <MobileNavigation />}
        {open ? closeMobile : openMobile}
        <BackgroundText>
          {/*<LinkLogo to="/">*/}
          {/*  {navbar ? (*/}
          {/*    <Logo style={{ width: '80px', height: '80px' }} src={HeaderLogoBlue} />*/}
          {/*  ) : (*/}
          {/*    <Logo src={HeaderLogo} />*/}
          {/*  )}*/}
          {/*</LinkLogo>*/}
          <DivColumn>
            <DivFirstHeader>
              <DivPhone>
                {/*<LinkLogo to="/">*/}
                {/*  {navbar ? (*/}
                {/*    <Logo style={{ width: '80px', height: '80px' }} src={HeaderLogoBlue} />*/}
                {/*  ) : (*/}
                {/*    <Logo src={HeaderLogo} />*/}
                {/*  )}*/}
                {/*</LinkLogo>*/}
                <LinkLogo to="/">
                  <Logo src={HeaderLogoBlue} />
                </LinkLogo>
                <Div104>
                  <div>
                    <a href={'tel:104'}>104</a>
                  </div>
                  <p>Аварийная служба</p>
                </Div104>
                <Div104>
                  <div>
                    <a href={'tel:162'}>162</a>
                  </div>
                  <p>Контакт-центр</p>
                </Div104>
              </DivPhone>
              <ContainerElements>
                {' '}
                <PersonalAccButton href={'https://service.mingas.by:5002/auth/login#login'}>
                  {/*{navbar ? (*/}
                  {/*  <IoMdContact style={{ width: '30px', height: '28px' }} color={'#0d4475'} />*/}
                  {/*) : (*/}
                  {/*  <IoMdContact style={{ width: '30px', height: '28px' }} color={'white'} />*/}
                  {/*)}*/}
                  <IoMdContacts className={'icon'} />
                  {/*<DivPersonalAcc>{t('header:PersonalArea')}</DivPersonalAcc>*/}
                </PersonalAccButton>
                <SearchPage />
                <Language />
                {navbar ? (
                  <IoMdEyeOffs
                    className={'icon'}
                    href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}
                  />
                ) : (
                  <IoMdEyeOffs
                    className={'icon'}
                    href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}
                  />
                )}
              </ContainerElements>
            </DivFirstHeader>
            <ButtonsContainer>
              <Dropdown className={'header-btns'}>
                <CompanyButton to="/company/history">
                  <Trans i18nKey="header:ABOUTTHEENTERPRISE" />
                  <span />
                </CompanyButton>
                <DivButtonHeader className={'header-btns'}>
                  <ButtonLink to="/company/history">История предприятия</ButtonLink>
                  <ButtonLink to="/company/management">Руководство предприятия</ButtonLink>
                  <ButtonLink to="/company/career">Работа в УП "Мингаз"</ButtonLink>
                  <ButtonLink to="/company/parent-organizations">
                    Вышестоящие организации
                  </ButtonLink>
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
                  <ButtonLink to="/company/corruption">Противодействие коррупции</ButtonLink>
                  <ButtonLink to="/company/documentation">
                    Сертификаты, лицензии, свидетельства
                  </ButtonLink>
                  <ButtonLink to="/company/gratitude">Благодарности и награды</ButtonLink>
                </DivButtonHeader>
              </Dropdown>

              <Dropdown>
                <ServicesButton to="/residents-of-the-capital-region">
                  {t('header:Services')}
                  <span />
                </ServicesButton>
                <DivButtonHeader className={'header-btns'}>
                  <ButtonLink to="/services">
                    Услуги <img alt={''} src={next} />
                    <span>
                      <NavLink to="/services/administrative-services">
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
                  {/*<ButtonLink to={'/feedback/reception-of-citizens'}>Приём граждан</ButtonLink>*/}
                  <ButtonLink to={'/feedback/question-answer/1'}>
                    Часто задаваемые вопросы
                  </ButtonLink>
                  <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
                  <ButtonLink to={'/feedback/leave-feedback'}>Оставить отзыв</ButtonLink>
                </DivButtonHeader>
              </Dropdown>

              <Dropdown>
                <ServicesButton to="/for-business">
                  Для бизнеса <span />
                </ServicesButton>
                <DivButtonHeader className={'header-btns'}>
                  <ButtonLink to="/services-legal-entities">Услуги</ButtonLink>
                  <ButtonLink to="/feedback/electronic-appeal-for-entity">
                    Обращение юридических лиц
                  </ButtonLink>
                  <ButtonLink to="/tenders">Тендеры</ButtonLink>
                  <ButtonLink to={'/feedback/question-answer/1'}>
                    Часто задаваемые вопросы
                  </ButtonLink>
                  <ButtonLink to="/services-legal-entities/administrative-services-legal/">
                    Административные процедуры
                  </ButtonLink>
                  <ButtonLink to="/regulatory-documents-for-entity">
                    Регламентирующие документы
                  </ButtonLink>
                </DivButtonHeader>
              </Dropdown>

              <Dropdown>
                <PressCenterButtons to="/press-center/1">
                  {t('header:PressCenter')}
                  <span />
                </PressCenterButtons>
                <DivButtonHeader className={'header-btns'}>
                  <ButtonLink to="/press-center/1">СМИ о нас</ButtonLink>
                  <ButtonLink to="/press-center/2">
                    Корпоротивная газета "Столичный газовик"
                  </ButtonLink>
                  <ButtonLink to="/press-center/3">Жизнь в стиле "Мингаз"</ButtonLink>
                </DivButtonHeader>
              </Dropdown>
              <Dropdown>
                <ContactButton to="/contacts/phone-services">
                  {t('header:Contacts')}
                  <span />
                </ContactButton>
                <DivButtonHeader className={'header-btns'}>
                  {/*<ButtonLink to="/contacts/phone-services">Контактная информация</ButtonLink>*/}
                  <ButtonLink to="/contacts/work-schedule">
                    График личного приёма граждан
                  </ButtonLink>
                  <ButtonLink to="/contacts/phone-services">
                    Телефоны служб по работе с клиентами
                  </ButtonLink>
                  <ButtonLink to="/contacts/requisites">Реквизиты предприятия</ButtonLink>
                </DivButtonHeader>
              </Dropdown>
              <ServicesButton to="/company/union">
                Профсоюз
                <span />
              </ServicesButton>
              {/*<MingasShopBtn href={'https://mingas-shop.by/'}>Интернет-магазин</MingasShopBtn>*/}
            </ButtonsContainer>
          </DivColumn>
        </BackgroundText>
      </Background>
    </Container>
  );
}
