import {
  ContainerElements,
  Div104,
  DivFirstHeader,
  DivPhone,
  IoMdContacts,
  IoMdEyeOffs,
  Logo,
  PersonalAccButton,
} from '../styles';
import HeaderLogoBlue from '../../../assets/png/mingaz_logo_white.webp';
import {FiShoppingBag, FiShoppingCart} from 'react-icons/fi';
import SearchPage from '../../../pages/SearchPage';
import Language from '../language';
import React from 'react';
import {NavLink} from "react-router-dom";

export default function UpperContainerHeader() {
  return (
    <DivFirstHeader>
      <DivPhone>
        <NavLink to="/">
          <Logo src={HeaderLogoBlue} />
        </NavLink>
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
      <Logo className={'gerb'} src={require('../../../assets/png/gerb_white.webp')} />
      <Logo className={'sign'} src={require('../../../assets/png/sign.png')} />
      <ContainerElements>
        <PersonalAccButton
          title="Контакт-центр"
          href={'https://service.mingas.by:5002/auth/login#login'}
        >
          <IoMdContacts className={'icon'} />
        </PersonalAccButton>
        <PersonalAccButton
          target={'_blank'}
          title="Магазин УП 'МИНГАЗ'"
          href={'https://shop.mingas.by/'}
        >
          <FiShoppingCart style={{ width: '34px', height: '34px' }} className={'icon'} />
        </PersonalAccButton>
        <PersonalAccButton
            target={'_blank'}
            title="Onliner"
            href={'https://20393.shop.onliner.by/'}
        >
          <FiShoppingBag style={{ width: '34px', height: '34px' }}  className={'icon'} />
        </PersonalAccButton>
        <SearchPage />
        <Language />
        <a href={'http://finevision.ru/?hostname=mingas.by&path=/'}>
          <IoMdEyeOffs className={'icon'} />
        </a>
      </ContainerElements>
    </DivFirstHeader>
  );
}
