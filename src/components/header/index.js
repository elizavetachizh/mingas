import React, { useEffect, useState } from 'react';
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
  ContanerLink,
} from './styles';
import HeaderLogoBlue from '../../assets/png/mingaz_logo_white.png';
import { ButtonLink } from '../../pages/services/styles';
import MobileNavigation from './mobileNavigation';
import Language from './language';
import { Trans, useTranslation } from 'react-i18next';
import useMediaQuery from '../../pages/Home/parallax/useMediaQuery';
import { NavLink } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage';
import { IoIosArrowForward } from 'react-icons/io';

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
  useEffect(() => {
    if (!open) {
      document.body.classList.remove('mobile');
    } else {
      document.body.classList.add('mobile');
    }
  }, [open]);
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
      <Background backgroundHeader={backgroundHeader}>
        {open && <MobileNavigation />}
        {open ? closeMobile : openMobile}
        <BackgroundText>
          <DivColumn>
            <DivFirstHeader>
              <DivPhone>
                <LinkLogo to="/">
                  <Logo src={HeaderLogoBlue} />
                </LinkLogo>
                <Div104>
                  <div>
                    <a href={'tel:104'}>104</a>
                  </div>
                  <p> {t('header:emergencyService')}</p>
                </Div104>
                <Div104>
                  <div>
                    <a href={'tel:162'}>162</a>
                  </div>
                  <p>{t('header:contactCenter')}</p>
                </Div104>
              </DivPhone>
              <ContainerElements>
                <PersonalAccButton
                  title={`${t('header:PersonalArea')}`}
                  href={'https://service.mingas.by:5002/auth/login#login'}
                >
                  <IoMdContacts className={'icon'} />
                </PersonalAccButton>
                <SearchPage />
                <Language />
                {navbar ? (
                  <a href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}>
                    {' '}
                    <IoMdEyeOffs className={'icon'} />
                  </a>
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
                  <ButtonLink to="/company/history">{t('header:history')}</ButtonLink>
                  <ButtonLink to="/company/management">
                    {t('header:enterpriseManagement')}
                  </ButtonLink>
                  <ButtonLink to="/company/career"> {t('header:work')}</ButtonLink>
                  <ButtonLink to="/company/parent-organizations">
                    {t('header:ParentOrganizations')}
                  </ButtonLink>
                  <ContanerLink>
                    <ButtonLink to="/company/branches" style={{ width: '100%' }}>
                      {' '}
                      Филиалы УП "Мингаз" <IoIosArrowForward color={'#0d4475'} />{' '}
                    </ButtonLink>

                    <span style={{ margin: '20% 0 0' }}>
                      <NavLink to="/company/branches/ogonek">
                        Филиал оздоровительный комплекс "Огонёк"
                      </NavLink>
                      <NavLink to="/company/branches/Bubni">Филиал "Бубны"</NavLink>
                      <NavLink to="/company/branches/TBZ">
                        Филиал "Торфобрикетный завод "Сергеевическое"
                      </NavLink>
                    </span>
                  </ContanerLink>
                  {/*</ButtonLink>*/}
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
                  <ContanerLink>
                    <ButtonLink to="/services">
                      Услуги <IoIosArrowForward color={'#0d4475'} />
                    </ButtonLink>
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
                  </ContanerLink>

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
                  {t('header:ForBusiness')} <span />
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
                  <ButtonLink to="/regulatory-documents-for-business/1">
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
                {t('header:union')}
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
