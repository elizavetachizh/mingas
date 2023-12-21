import {
  CompanyButton,
  DivButtonHeader,
  Dropdown,
  LinksContainer,
  DivBlocksHeader,
  ContainerAbsolute,
} from './styles';
import { ButtonLink } from '../../../pages/services/styles';
import React, { useEffect, useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { ContainerElements, IoMdContacts, IoMdEyeOffs, PersonalAccButton } from '../styles';
import SearchPage from '../../../pages/SearchPage';
import Language from '../language';
import { useLocation, useNavigate } from 'react-router';
import { links } from '../../../assets/data/linksToResidentsOfTheCapitalRegion';
import { linksForBusiness } from '../../../assets/data/linksForBusines';
import { linksHeaderCompany } from '../../../const/consts';

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
              {linksHeaderCompany.map((el) => (
                <ButtonLink to={el.link}>{el.name}</ButtonLink>
              ))}
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
              {links.map((el) => (
                <ButtonLink to={el.link}>{el.name}</ButtonLink>
              ))}
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
              {linksForBusiness.map((el) => (
                <ButtonLink to={el.link}>{el.name}</ButtonLink>
              ))}
            </div>
          </DivButtonHeader>
        </Dropdown>

        <Dropdown>
          <DivBlocksHeader>
            <CompanyButton className={isOpenBtnForPressCenter && `handleBtn`} to="/press-center/1">
              Пресс-центр
              <span />
            </CompanyButton>
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
              <ButtonLink to="/press-center/1">Лента новостей</ButtonLink>
              <ButtonLink to="/press-center/2">Корпоративная газета "Столичный газовик"</ButtonLink>
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
              <ButtonLink to="/contacts/work-schedule">График личного приёма граждан</ButtonLink>
              <ButtonLink to="/contacts/phone-services">
                Телефоны служб по работе с клиентами
              </ButtonLink>
              <ButtonLink to="/contacts/requisites">Реквизиты предприятия</ButtonLink>
            </div>
          </DivButtonHeader>
        </Dropdown>

        <CompanyButton to="/company/union">Профсоюз</CompanyButton>
      </LinksContainer>
    </ContainerAbsolute>
  );
}
