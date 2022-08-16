import React from 'react';
import {
  CompanyButton,
  ContactButton,
  LinkLogo,
  LinksContainer,
  Logo,
  PersonalAccButton,
  PressCenterButtons,
  ServicesButton,
} from '../header/styles';
import HeaderLogo from '../../assets/png/mingaz_logo_white.png';
import telegram from '../../assets/icons/telegram.png';
import instagram from '../../assets/icons/instagram.png';
import viber from '../../assets/icons/viber.png';
import {
  Contacts,
  Telephons,
  ContactInform,
  WorkTime,
  Instagram,
  Telegram,
  Viber,
  LinksNetwork,
  LinksSocialMedia,
} from './styles';
import ButtonFun from '../button';
import { Trans } from 'react-i18next';
import { t } from 'i18next';
import { Container } from "../../pages/Home/services/styles";
import { Prizes } from "../../pages/Home/Content/styles";
const line = {
  width: '70%',
};
export default function Footer() {
  return (
    <Container>
      <LinksContainer>
        <LinkLogo to="/">
          <Logo style={{width: '70px', height: '70px'}} src={HeaderLogo} />
        </LinkLogo>
        <CompanyButton to="/company/history">
          <Trans i18nKey="header:ABOUTTHEENTERPRISE"></Trans>
        </CompanyButton>
        <ServicesButton to="/services">{t('header:Services')}</ServicesButton>
        <ServicesButton to="/services">Для бизнеса</ServicesButton>
        <ContactButton to="/Contacts">Контакты</ContactButton>
        <PressCenterButtons to="/Press-Center">Пресс-центр</PressCenterButtons>
        <PersonalAccButton to={'/Personal'}>{t('header:PersonalArea')}</PersonalAccButton>
      </LinksContainer>
      <hr style={line} />
      <LinksNetwork>
        <LinksSocialMedia>
          <Prizes>
            <img src={require(`../../assets/prizes/primary_1.png`)} />
            <img src={require(`../../assets/prizes/primary_2.png`)} />
            <img src={require(`../../assets/prizes/primary_3.png`)} />
            <img src={require(`../../assets/prizes/primary_4.png`)} />
          </Prizes>
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
