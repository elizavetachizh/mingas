import React, { useState } from 'react';
import { HeaderCompanyDiv, DivButton, HeaderCompanyBtn, HeaderCompanyContainer } from './styles';
import useMediaQuery from '../../Home/parallax/useMediaQuery';
import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { linksHeaderCompany } from '../../../const/consts';

export default function HeaderCompany() {
  const isPhone = useMediaQuery('(max-width: 720px)');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderCompanyContainer>
      {isPhone ? (
        <General className={'menu'}>
          <BtnIsOpen className={'menu'} onClick={() => setIsOpen(!isOpen)}>
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
              {linksHeaderCompany.map((el) => (
                <HeaderCompanyBtn to={`/company/${el.link}`}>{el.name}</HeaderCompanyBtn>
              ))}
            </DivButton>
          </Div>
        </General>
      ) : (
        <HeaderCompanyDiv>
          <DivButton>
            {linksHeaderCompany.map((el) => (
              <HeaderCompanyBtn to={`/company/${el.link}`}>{el.name}</HeaderCompanyBtn>
            ))}
          </DivButton>
          <hr />
        </HeaderCompanyDiv>
      )}
    </HeaderCompanyContainer>
  );
}
