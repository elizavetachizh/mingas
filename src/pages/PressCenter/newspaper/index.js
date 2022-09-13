import { data } from './data';
import { ContanerNewsPape } from './styles';
import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import React, { useState } from 'react';

export default function Newspaper() {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const dataReverse = data.reverse();
  return (
    <div>
      <ContanerNewsPape>
        <img alt={''} src={require('../../../assets/png/newspaper.png')} />
        <a
          href={require('../../../assets/pdf/newspaper/gazeta_last.pdf')}
          target={'_blank'}
          rel="noreferrer"
        >
          Последний выпуск
        </a>
      </ContanerNewsPape>
      <General>
        <BtnIsOpen onClick={animate}>
          <p>Архив новостей</p>
          <div>
            {isOpen ? (
              <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
            ) : (
              <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
            )}
          </div>
        </BtnIsOpen>
        <Div className={isOpen && `shake`}>
          {dataReverse.map((el) => (
            <ContanerNewsPape>
              <img alt={''} src={require('../../../assets/png/newspaper.png')} />
              <a href={el.link} target={'_blank'} rel="noreferrer">
                {el.name}
              </a>
            </ContanerNewsPape>
          ))}
        </Div>
      </General>
    </div>
  );
}
