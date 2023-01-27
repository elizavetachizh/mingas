import {
  CompanyButton,
  DivButtonHeader,
  Dropdown,
  LinksContainer,
  PressCenterButtons,
  ServicesButton,
  DivBlocksHeader,
  ContainerAbsolute,
} from './styles';
import { ButtonLink } from '../../../pages/services/styles';
import React, { useEffect, useState } from 'react';
import next from '../../../assets/png/next.png';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { ContainerElements, IoMdContacts, IoMdEyeOffs, PersonalAccButton } from '../styles';
import SearchPage from '../../../pages/SearchPage';
import Language from '../language';
import { useLocation, useNavigate } from 'react-router';

export default function MobileNavigation() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenBtn, setIsOpenBtn] = useState(false);
  const [isOpenBtnForBusiness, setIsOpenBtnForBusiness] = useState(false);
  const [isOpenBtnForContacts, setIsOpenBtnForContacts] = useState(false);
  const [isOpenBtnForPressCenter, setIsOpenBtnForPressCenter] = useState(false);

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

  const animateOpenBtnForContacts = () => {
    setIsOpenBtnForContacts(true);
    if (isOpenBtnForContacts) {
      setIsOpenBtnForContacts(false);
    }
  };

  const animateOpenBtnForPressCenter = () => {
    setIsOpenBtnForPressCenter(true);
    if (isOpenBtnForPressCenter) {
      setIsOpenBtnForPressCenter(false);
    }
  };
  useEffect(() => {
    navigate(pathname);
  }, [navigate, pathname]);
  return (
    <ContainerAbsolute>
      <LinksContainer>
        <ContainerElements className={'mobile'}>
          <PersonalAccButton href={'https://service.mingas.by:5002/auth/login#login'}>
            <IoMdContacts className={'icon iconMobile'} />
          </PersonalAccButton>
          <SearchPage classname={'header'} />
          <Language />
          <IoMdEyeOffs
            className={'icon'}
            href={'http://finevision.ru/?hostname=mingas.netlify.app&path=/'}
          />
        </ContainerElements>

        <Dropdown>
          <DivBlocksHeader>
            <CompanyButton className={isOpen && `handleBtn`} to="/company/history">
              Мингаз сегодня
            </CompanyButton>
            <div>
              {isOpen ? <IoIosArrowUp onClick={animate} /> : <IoIosArrowDown onClick={animate} />}
            </div>
          </DivBlocksHeader>
          <DivButtonHeader className={isOpen && `handleBtn`}>
            <div>
              <ButtonLink to="/company/history">История предприятия</ButtonLink>
              <ButtonLink to="/company/management">Руководство предприятия</ButtonLink>
              <ButtonLink to="/company/career">Работа в УП "Мингаз"</ButtonLink>
              <ButtonLink to="/company/parent-organizations">Вышестоящие организации</ButtonLink>
              <ButtonLink to="/company/branches" style={{ width: '100%' }}>
                Филиалы УП "Мингаз" <img alt={''} src={next} />
              </ButtonLink>
              <ButtonLink to="/company/corruption">Противодействие коррупции</ButtonLink>
              <ButtonLink to="/company/documentation">
                Сертификаты, лицензии, свидетельства
              </ButtonLink>
              <ButtonLink to="/company/gratitude">Благодарности и награды</ButtonLink>
            </div>
          </DivButtonHeader>
        </Dropdown>

        <Dropdown>
          <DivBlocksHeader>
            <CompanyButton
              className={isOpenBtn && `handleBtn`}
              to="/residents-of-the-capital-region"
            >
              Жителям столичного региона
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
              <ButtonLink to="/services">
                Услуги <img alt={'меню'} src={next} />
              </ButtonLink>
              <ButtonLink to={'/feedback/online-application'}>Онлайн заявки</ButtonLink>
              <ButtonLink to="/regulatory-documents/Законы">Регламентирующие документы</ButtonLink>
              <ButtonLink to={'/feedback/question-answer/63930a954fe167e2981cc2e1'}>
                Часто задаваемые вопросы
              </ButtonLink>
              <ButtonLink to={'/feedback/electronic-appeal'}>Обращение граждан</ButtonLink>
              <ButtonLink to={'/feedback/leave-feedback'}>Оставить отзыв</ButtonLink>
              <ButtonLink to={'/posts/'}>Важно знать, безопасность</ButtonLink>
            </div>
          </DivButtonHeader>
        </Dropdown>

        <Dropdown>
          <DivBlocksHeader>
            <CompanyButton className={isOpenBtnForBusiness && `handleBtn`} to="/for-business">
              Для бизнеса
            </CompanyButton>
            <div>
              {isOpenBtnForBusiness ? (
                <IoIosArrowUp onClick={animateOpenBtnForBusiness} />
              ) : (
                <IoIosArrowDown onClick={animateOpenBtnForBusiness} />
              )}
            </div>
          </DivBlocksHeader>
          <DivButtonHeader className={isOpenBtnForBusiness && `handleBtn`}>
            <div>
              <ButtonLink to="/services-legal-entities">Услуги</ButtonLink>
              <ButtonLink to="/feedback/electronic-appeal">Обращение юридических лиц</ButtonLink>
              <ButtonLink to="/tenders">Тендеры</ButtonLink>
              <ButtonLink to={'/feedback/question-answer/1'}>Часто задаваемые вопросы</ButtonLink>
              <ButtonLink to="/services-legal-entities/administrative-services-legal/">
                Административные процедуры
              </ButtonLink>
              <ButtonLink to="/regulatory-documents-for-business/1">
                Регламентирующие документы
              </ButtonLink>
            </div>
          </DivButtonHeader>
        </Dropdown>

        <Dropdown>
          <DivBlocksHeader>
            <PressCenterButtons
              className={isOpenBtnForPressCenter && `handleBtn`}
              to="/press-center/1"
            >
              Пресс-центр
              <span />
            </PressCenterButtons>
            <div>
              {isOpenBtnForPressCenter ? (
                <IoIosArrowUp onClick={animateOpenBtnForPressCenter} />
              ) : (
                <IoIosArrowDown onClick={animateOpenBtnForPressCenter} />
              )}
            </div>
          </DivBlocksHeader>
          <DivButtonHeader className={isOpenBtnForPressCenter && `handleBtn`}>
            <div>
              {' '}
              <ButtonLink to="/press-center/1">СМИ о нас</ButtonLink>
              {/*<ButtonLink to="/press-center/2">Новости</ButtonLink>*/}
              <ButtonLink to="/press-center/2">Корпоротивная газета "Столичный газовик"</ButtonLink>
              <ButtonLink to="/press-center/3">Жизнь в стиле "Мингаз"</ButtonLink>
            </div>
          </DivButtonHeader>
        </Dropdown>

        <Dropdown>
          <DivBlocksHeader>
            <CompanyButton
              className={isOpenBtnForContacts && `handleBtn`}
              to="/contacts/phone-services"
            >
              Контакты
            </CompanyButton>
            <div>
              {isOpenBtnForContacts ? (
                <IoIosArrowUp onClick={animateOpenBtnForContacts} />
              ) : (
                <IoIosArrowDown onClick={animateOpenBtnForContacts} />
              )}
            </div>
          </DivBlocksHeader>
          <DivButtonHeader className={isOpenBtnForContacts && `handleBtn`}>
            <div>
              {' '}
              {/*<ButtonLink to="/contacts/phone-services">Контактная информация</ButtonLink>*/}
              <ButtonLink to="/contacts/work-schedule">График личного приёма граждан</ButtonLink>
              <ButtonLink to="/contacts/phone-services">
                Телефоны служб по работе с клиентами
              </ButtonLink>
              <ButtonLink to="/contacts/requisites">Реквизиты предприятия</ButtonLink>
            </div>
          </DivButtonHeader>
        </Dropdown>

        <ServicesButton to="/company/union">Профсоюз</ServicesButton>
      </LinksContainer>
    </ContainerAbsolute>
  );
}
