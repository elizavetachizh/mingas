import React from 'react';
import { LinkLogo, LinksContainer, Logo } from '../header/styles';
import HeaderLogo from '../../assets/png/mingaz_logo_white.webp';
import { Contacts, Telephons, FooterContainer } from './styles';
import ButtonFun from '../button';

import { Prizes } from '../../pages/Home/Content/styles';
import { IoLogoInstagram } from 'react-icons/io';
export default function Footer({ classname }) {
  return (
    <FooterContainer className={classname}>
      <LinksContainer>
        <LinkLogo to="/">
          <Logo style={{ width: '70px', height: '70px' }} src={HeaderLogo} />
        </LinkLogo>
        <Prizes>
          <img alt={'image1'} src={require(`../../assets/prizes/1.webp`)} />
          <img alt={'image2'} src={require(`../../assets/prizes/2.webp`)} />
          <img alt={'image3'} src={require(`../../assets/prizes/3.webp`)} />
          <img alt={'image4'} src={require(`../../assets/prizes/4.webp`)} />
          <img alt={'image5'} src={require(`../../assets/prizes/5.webp`)} />
        </Prizes>
      </LinksContainer>
      <Contacts>
        <Telephons>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <p>Смотри нас в </p>
            <a
              title={'Инстаграм'}
              href={'https://instagram.com/mingas.by?igshid=YmMyMTA2M2Y='}
              target={'_blank'}
              rel="noreferrer"
            >
              <IoLogoInstagram style={{ width: '46px', height: '46px' }} />
            </a>
          </div>
          <ButtonFun href={'/contacts/phone-services'} infoButton={'Телефоны для связи'} />
          <p>
            Контакт-центр УП «МИНГАЗ» тел. <a href={'tel:162'}>162</a>
          </p>
          <a type={'download'} href={'https://back.mingas.by/public/documents/confidentiality.pdf'}>
            Политика обработки персональных данных УП "МИНГАЗ"
          </a>
        </Telephons>
        <Telephons>
          <ButtonFun href={'/contacts/phone-services'} infoButton={'Контактная информация'} />
          <p>
            220037, г.Минск,{' '}
            <a href={'https://yandex.by/maps/-/CCUVf2cXKC'} target={'_blank'} rel="noreferrer">
              ул.Ботаническая, 11/1
            </a>
          </p>
          <p style={{ margin: '0' }}>
            Факс: <a href={'tel:+375 (017) 366-36-33'}>+375 (017) 366-36-33</a> E-mail:
            <a href={'mailto:root@mingas.by'}>root@mingas.by</a>
          </p>
        </Telephons>
        <Telephons>
          <ButtonFun href={'/contacts/work-schedule'} infoButton={'График работы'} />
          <p>Понедельник – Четверг: с 8:00 до 17:00</p>
          <p>Пятница: с 8:00 до 15:45</p>
          <p>Обед с 12:00 до 12:45</p>
          <p>
            <a
              href={'https://mingas.by/contacts/phone-services'}
              target={'_blank'}
              rel="noreferrer"
            >
              График работы центра обслуживания населения
            </a>
          </p>
        </Telephons>
      </Contacts>
    </FooterContainer>
  );
}
