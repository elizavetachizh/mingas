import React from 'react';
import {
  ButtonsContainer,
  CompanyButton,
  ContactButton,
  IconEye,
  LinkLogo,
  LinksContainer,
  Logo,
  PersonalAccButton,
  PressCenterButtons,
  ServiceCenterButton,
  ServicesButton,
} from '../header/styles';

import HeaderLogo from '../../assets/png/mingaz_logo_color.png';
import telegram from '../../assets/icons/telegram.png';
import instagram from '../../assets/icons/instagram.png';
import viber from '../../assets/icons/viber.png';
import {
  Container,
  Contacts,
  Telephons,
  ContactInform,
  WorkTime,
  SocialMedia,
  Instagram,
  Telegram,
  Viber,
  Row,
  LinksNetwork,
  TextSocialMedia,
  LinksSocialMedia,
} from './styles';
import eye from '../../assets/png/visibilityEye.png';
import ButtonFun from '../button';

const line = {
  width: '70%',
};

export default function Footer() {
  return (
    <Container>
      <LinksContainer>
        <LinkLogo to="/">
          <Logo src={HeaderLogo} />
        </LinkLogo>
        <CompanyButton to="/company/history">О предприятии</CompanyButton>
        <ServicesButton to="/Services">Услуги</ServicesButton>
        <ContactButton to="/Contacts">Контакты</ContactButton>
        <PressCenterButtons to="/Press-Center">Пресс-центр</PressCenterButtons>
        <ServiceCenterButton to="/Service-Center">Сервисный центр</ServiceCenterButton>
        {/*  <PersonalAccButton to={'/personal-account'}>Личный кабинет</PersonalAccButton>*/}
        <IconEye src={eye} />
      </LinksContainer>
      <hr style={line} />
      <LinksNetwork>
        <LinksSocialMedia>
          <Instagram src={instagram} />
          <Telegram src={telegram} />
          <Viber src={viber} />
        </LinksSocialMedia>
        <Contacts>
          <Telephons>
            <ButtonFun href={'/contacts/phone-services'} infoButton={'Телефоны для связи'} />
            <p>Контакт-центр УП «МИНГАЗ» тел. 162</p>
          </Telephons>
          <ContactInform>
            <ButtonFun href={'/contacts'} infoButton={'Конкатная информация'}></ButtonFun>
            <p>220037, г.Минск, ул.Ботаническая, 11/1</p>
            <p>Тел. (017) 299-28-80 (приемная руководителя)</p>
            <p>Факс (017) 366-36-33 E-mail: root@mingas.by</p>
          </ContactInform>
          <WorkTime>
            <ButtonFun href={'/contacts/work-schedule'} infoButton={'График работы'} />
            <p>Понедельник – Четверг: с 8:00 до 17:00</p>
            <p>Пятница: с 8:00 до 15:45</p>
            <p>Обед с 12:00 до 12:45</p>
          </WorkTime>
        </Contacts>
      </LinksNetwork>
    </Container>
  );
}
