import React, { useState } from 'react';
import { HeaderCompanyDiv, DivButton, HeaderCompanyBtn, HeaderCompanyContainer } from './styles';
import useMediaQuery from '../../Home/parallax/useMediaQuery';
import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function HeaderCompany() {
  const isPhone = useMediaQuery('(max-width: 720px)');
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <HeaderCompanyContainer>
      {isPhone ? (
        <General className={'menu'}>
          <BtnIsOpen className={'menu'} onClick={animate}>
            <p>Меню</p>
            <div>
              {isOpen ? (
                <IoIosArrowUp style={{ color: '#0e43af', margin: '28% 0' }} />
              ) : (
                <IoIosArrowDown style={{ color: '#0e43af', margin: '28% 0' }} />
              )}
            </div>
          </BtnIsOpen>
          <Div className={isOpen && `shake menu`}>
            <DivButton className={'menu'}>
              <HeaderCompanyBtn to="/company/history">История предприятия</HeaderCompanyBtn>
              <HeaderCompanyBtn to="/company/management">Руководство</HeaderCompanyBtn>
              <HeaderCompanyBtn to="/company/management/all-departments">
                Подразделения
              </HeaderCompanyBtn>
              <HeaderCompanyBtn to="/company/career">Работа в УП "МИНГАЗ"</HeaderCompanyBtn>
              <HeaderCompanyBtn to="/company/parent-organizations">
                Вышестоящие организации
              </HeaderCompanyBtn>
              <HeaderCompanyBtn to="/company/branches">Филиалы УП "Мингаз"</HeaderCompanyBtn>
              <HeaderCompanyBtn to="/company/corruption">
                Противодействие коррупции
              </HeaderCompanyBtn>
              <HeaderCompanyBtn to="/company/documentation">
                Сертификаты, лицензии, свидетельства
              </HeaderCompanyBtn>
              <HeaderCompanyBtn to="/company/gratitude">Благодарности и награды</HeaderCompanyBtn>
            </DivButton>
          </Div>
        </General>
      ) : (
        <HeaderCompanyDiv>
          <DivButton>
            <HeaderCompanyBtn to="/company/history">История предприятия</HeaderCompanyBtn>
            <HeaderCompanyBtn to="/company/management">Руководство</HeaderCompanyBtn>
            <HeaderCompanyBtn to="/company/management/all-departments">Подразделения</HeaderCompanyBtn>
            <HeaderCompanyBtn to="/company/career">Работа в УП "МИНГАЗ"</HeaderCompanyBtn>
            <HeaderCompanyBtn to="/company/parent-organizations">
              Вышестоящие организации
            </HeaderCompanyBtn>
            <HeaderCompanyBtn to="/company/branches/">Филиалы УП "Мингаз"</HeaderCompanyBtn>
            <HeaderCompanyBtn to="/company/corruption">Противодействие коррупции</HeaderCompanyBtn>
            <HeaderCompanyBtn to="/company/documentation">
              Сертификаты, лицензии, свидетельства
            </HeaderCompanyBtn>
            <HeaderCompanyBtn to="/company/gratitude">Благодарности и награды</HeaderCompanyBtn>
          </DivButton>
          <hr />
        </HeaderCompanyDiv>
      )}
    </HeaderCompanyContainer>
  );
}
