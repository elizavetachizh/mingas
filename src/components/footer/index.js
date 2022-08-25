import React from 'react';
import { LinkLogo, LinksContainer, Logo } from '../header/styles';
import HeaderLogo from '../../assets/png/mingaz_logo_white.png';
import { Contacts, Telephons, ContactInform, WorkTime } from './styles';
import ButtonFun from '../button';

import { Prizes } from '../../pages/Home/Content/styles';
export default function Footer() {
  return (
    <div
      style={{
        boxShadow: ' 0 0 5px 3px rgba(0, 0, 0, 0.2)',
        borderRadius: '20px',
        backgroundColor: '#0d4475',
        bottom: '0',
        margin: '0',
        padding: 0,
      }}
    >
      <LinksContainer>
        <LinkLogo to="/">
          <Logo style={{ width: '70px', height: '70px' }} src={HeaderLogo} />
        </LinkLogo>
        <Prizes>
          <img src={require(`../../assets/prizes/1.png`)} />
          <img src={require(`../../assets/prizes/2.png`)} />
          <img src={require(`../../assets/prizes/3.png`)} />
          <img src={require(`../../assets/prizes/4.png`)} />
          <img src={require(`../../assets/prizes/5.png`)} />
        </Prizes>
      </LinksContainer>
      <Contacts>
        <Telephons>
          <ButtonFun href={'/contacts/phone-services'} infoButton={'Телефоны для связи'} />
          <p>Контакт-центр УП «МИНГАЗ» тел. 162</p>
        </Telephons>
        <ContactInform>
          <ButtonFun href={'/contacts'} infoButton={'Конкатная информация'} />
          <p>220037, г.Минск, ул.Ботаническая, 11/1</p>
          <p>Тел. (017) 299-28-80 (приемная руководителя)</p>
          <p style={{ margin: '0' }}>Факс (017) 366-36-33 E-mail: root@mingas.by</p>
        </ContactInform>
        <WorkTime>
          <ButtonFun href={'/contacts/work-schedule'} infoButton={'График работы'} />
          <p>Понедельник – Четверг: с 8:00 до 17:00</p>
          <p>Пятница: с 8:00 до 15:45</p>
          <p>Обед с 12:00 до 12:45</p>
        </WorkTime>
      </Contacts>
      {/*</LinksNetwork>*/}
    </div>
  );
}
