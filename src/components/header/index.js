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
  DivFirstHeader,
  Div104,
  DivPersonalAcc,
  DivPhone,
} from './styles';
import HeaderLogo from '../../assets/png/mingaz_logo_white.png';
import HeaderLogoBlue from '../../assets/png/mingaz_logo_blue.png';
import next from '../../assets/png/next.png';
import menu from '../../assets/icons/menu.png';
import close from '../../assets/png/close.png';
import { ButtonLink } from '../../pages/services/styles';
import MobileNavigation from './mobileNavigation';
import Language from './language';
import { Trans, useTranslation } from 'react-i18next';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import { NavLink } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage';
import { IoMdContact, IoMdEyeOff } from 'react-icons/io';
const styleMenu = {
  width: '30px',
  height: '30px',
};
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
      <GlobalStyle />
      <Background backgroundHeader={backgroundHeader} className={navbar && 'opacity'}>
        {open && <MobileNavigation />}
        {open ? closeMobile : openMobile}
        <BackgroundText>
          <LinkLogo to="/">
            {navbar ? (
              <Logo style={{ width: '80px', height: '80px' }} src={HeaderLogoBlue} />
            ) : (
              <Logo src={HeaderLogo} />
            )}
          </LinkLogo>
          <DivColumn>
            <DivFirstHeader>
              <DivPhone>
                <Div104>
                  <div className={navbar && 'opacity'}>
                    <a href={'tel:104'}>104</a>
                  </div>
                  <p>Аварийная служба</p>
                </Div104>
                <Div104>
                  <div className={navbar && 'opacity'}>
                    <a href={'tel:162'}>162</a>
                  </div>
                  <p>Контакт-центр</p>
                </Div104>
              </DivPhone>
              <PersonalAccButton href={'https://service.mingas.by:5200/'}>
                {navbar ? (
                  <IoMdContact style={{ width: '30px', height: '28px' }} color={'#0d4475'} />
                ) : (
                  <IoMdContact style={{ width: '30px', height: '28px' }} color={'white'} />
                )}
                <DivPersonalAcc>{t('header:PersonalArea')}</DivPersonalAcc>
              </PersonalAccButton>
              <SearchPage />
              <Language />
              {navbar ? (
                <IoMdEyeOff
                  color={'#0d4475'}
                  style={{ width: '30px', height: '30px' }}
                  href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}
                />
              ) : (
                <IoMdEyeOff
                  style={{ width: '30px', height: '30px' }}
                  href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}
                />
              )}
            </DivFirstHeader>
            <ButtonsContainer>
              <Dropdown>
                <CompanyButton to="/company/history">
                  <Trans i18nKey="header:ABOUTTHEENTERPRISE" />
                </CompanyButton>
                <DivButtonHeader>
                  <ButtonLink to="/company/history">История предприятия</ButtonLink>
                  <ButtonLink to="/company/management">Руководство предприятия</ButtonLink>
                  <ButtonLink to="/company/career">Работа в УП "Мингаз"</ButtonLink>
                  <ButtonLink to="/company/parent-organizations">
                    Вышестоящие организации
                  </ButtonLink>
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
                  <ButtonLink to="/company/documentation">
                    Сертификаты, лицензии, свидетельства
                  </ButtonLink>
                  <ButtonLink to="/company/gratitude">Благодарности и награды</ButtonLink>
                </DivButtonHeader>
              </Dropdown>

              <Dropdown>
                <ServicesButton to="/services">{t('header:Services')}</ServicesButton>
                <DivButtonHeader>
                  <ButtonLink to="/services">
                    Услуги <img alt={''} src={next} />
                    <span>
                      <NavLink to="/services/administrative-services/1">
                        Административные процедуры
                      </NavLink>
                      <NavLink to="/residents/price">Прейскурант цен</NavLink>
                      <NavLink to="/">Плановые работы</NavLink>
                    </span>
                  </ButtonLink>

                  <ButtonLink to={'/feedback/online-application'}>Онлайн заявки</ButtonLink>
                  <ButtonLink to="/regulatory-documents">Регламентирующие документы</ButtonLink>
                  <ButtonLink to={'/feedback/reception-of-citizens'}>Приём граждан</ButtonLink>
                  <ButtonLink to={'/feedback/question-answer/1'}>
                    Часто задаваемые вопросы
                  </ButtonLink>
                  <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
                  <ButtonLink to={'/feedback/leave-feedback'}>Оставить отзыв</ButtonLink>
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
                  <ButtonLink to={'/feedback/question-answer/1'}>Вопрос-ответ</ButtonLink>
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
                  <DivButtonHeader>
                    <ButtonLink to="/press-center/1">СМИ о нас</ButtonLink>
                    <ButtonLink to="/press-center/2">Новости</ButtonLink>
                    <ButtonLink to="/press-center/3">Жизнь в стиле "Мингаз"</ButtonLink>
                  </DivButtonHeader>
                </PressCenterButtons>
              </Dropdown>
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
                  <ButtonLink to="/contacts/requisites">Реквизиты предприятия</ButtonLink>
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
