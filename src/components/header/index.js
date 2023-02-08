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
  DivColumn,
  BackgroundText,
  ContainerElements,
  DivFirstHeader,
  Div104,
  DivPhone,
  IoMdEyeOffs,
  IoIosMenus,
  IoIosCloses,
  ContanerLink,
} from './styles';
import HeaderLogoBlue from '../../assets/png/mingaz_logo_white.webp';
import { ButtonLink } from '../../pages/services/styles';
import MobileNavigation from './mobileNavigation';
import Language from './language';
import { NavLink } from 'react-router-dom';
import SearchPage from '../../pages/SearchPage';
import { IoIosArrowForward } from 'react-icons/io';
import axios from 'axios';
import { API } from '../../backend';

export default function Header({ backgroundHeader }) {
  const [open, setOpen] = useState(false);

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

  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}/services`)
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setData]);

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
                {/*<PersonalAccButton*/}
                {/*  title="Контакт-центр"*/}
                {/*  href={'https://service.mingas.by:5002/auth/login#login'}*/}
                {/*>*/}
                {/*  <IoMdContacts className={'icon'} />*/}
                {/*</PersonalAccButton>*/}
                <SearchPage />
                <Language />
                <a href={'http://finevision.ru/?hostname=mingas.by&path=/'}>
                  <IoMdEyeOffs className={'icon'} />
                </a>
              </ContainerElements>
            </DivFirstHeader>
            <ButtonsContainer>
              <Dropdown className={'header-btns'}>
                <CompanyButton to="/company/history">
                  Мингаз сегодня
                  <span />
                </CompanyButton>
                <DivButtonHeader className={'header-btns'}>
                  <ButtonLink to="/company/history">История предприятия</ButtonLink>
                  <ButtonLink to="/company/management">Руководство предприятия</ButtonLink>
                  <ButtonLink to="/company/career"> Работа в УП "Мингаз"</ButtonLink>
                  <ButtonLink to="/company/parent-organizations">
                    Вышестоящие организации
                  </ButtonLink>
                  <ContanerLink>
                    <ButtonLink to="/company/branches" style={{ width: '100%' }}>
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
                  Жителям столичного региона
                  <span />
                </ServicesButton>
                <DivButtonHeader className={'header-btns'}>
                  <ContanerLink>
                    <ButtonLink rel="canonical" to="/services">
                      Услуги <IoIosArrowForward color={'#0d4475'} />
                    </ButtonLink>
                    <span>
                      <NavLink to="/services/administrative-services">
                        Административные процедуры
                      </NavLink>
                      <NavLink to="/residents/price">Прейскурант цен</NavLink>
                      {data.map((element) => {
                        if (element.type === '1') {
                          return (
                            <NavLink key={element._id} to={`/services/${element._id}`}>
                              {element.name}
                            </NavLink>
                          );
                        }
                      })}
                    </span>
                  </ContanerLink>

                  <ButtonLink to={'/feedback/online-application'}>Онлайн заявки</ButtonLink>
                  <ButtonLink to="/regulatory-documents/Законы">
                    Регламентирующие документы
                  </ButtonLink>
                  <ButtonLink to={'/feedback/question-answer/63930a954fe167e2981cc2e1'}>
                    Часто задаваемые вопросы
                  </ButtonLink>
                  <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
                  <ButtonLink to={'/feedback/leave-feedback'}>Оставить отзыв</ButtonLink>
                  <ButtonLink to={'/posts/'}>Важно знать, безопасность</ButtonLink>
                </DivButtonHeader>
              </Dropdown>

              <Dropdown>
                <ServicesButton rel="canonical" to="/for-business">
                  Для бизнеса <span />
                </ServicesButton>
                <DivButtonHeader className={'header-btns'}>
                  <ContanerLink>
                    <ButtonLink to="/services-legal-entities">
                      Услуги <IoIosArrowForward color={'#0d4475'} />
                    </ButtonLink>
                    <span>
                      {data.map((element) => {
                        if (element.type === '2') {
                          return (
                            <NavLink
                              key={element._id}
                              to={`/services-legal-entities/${element._id}`}
                            >
                              {element.name}
                            </NavLink>
                          );
                        }
                      })}
                    </span>
                  </ContanerLink>
                  <ButtonLink to="/feedback/electronic-appeal">
                    Обращение юридических лиц
                  </ButtonLink>
                  <ButtonLink to="/tenders">Тендеры</ButtonLink>
                  <ButtonLink to={'/feedback/question-answer/63930a954fe167e2981cc2e1'}>
                    Часто задаваемые вопросы
                  </ButtonLink>
                  <ButtonLink to="/services-legal-entities/administrative-services-legal/">
                    Административные процедуры
                  </ButtonLink>
                  <ButtonLink to="/regulatory-documents-for-business/Законы">
                    Регламентирующие документы
                  </ButtonLink>
                </DivButtonHeader>
              </Dropdown>

              <Dropdown>
                <PressCenterButtons to="/press-center/1">
                  Пресс-центр
                  <span />
                </PressCenterButtons>
                <DivButtonHeader className={'header-btns'}>
                  <ButtonLink to="/press-center/1">Лента новостей</ButtonLink>
                  <ButtonLink to="/press-center/2">
                    Корпоротивная газета "Столичный газовик"
                  </ButtonLink>
                  <ButtonLink to="/press-center/3">Жизнь в стиле "Мингаз"</ButtonLink>
                </DivButtonHeader>
              </Dropdown>
              <Dropdown>
                <ContactButton rel="canonical" to="/contacts/phone-services">
                  Контакты
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
