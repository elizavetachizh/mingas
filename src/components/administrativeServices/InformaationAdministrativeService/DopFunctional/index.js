import React, { useState } from 'react';
import { Div, BtnIsOpen, ContainerInformAboutService } from '../styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function DopFunctional({
  uniqueName,
  maximumImplementationPeriod,
  certificateValidityPeriod,
  boardSize,
  documents,
  contactInform,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const [isClose, setIsClose] = useState(false);
  const animateClose = () => {
    setIsClose(true);
    if (isClose) {
      setIsClose(false);
    }
  };
  return (
    <ContainerInformAboutService>
      <h3>{uniqueName}</h3>
      <p>
        Максимальный срок осуществления административной процедуры:
        <strong>{maximumImplementationPeriod}</strong>
      </p>
      <p>
        Срок действия справки, другого документа (решения), выдаваемых (принимаемого) при
        осуществлении административной процедуры: <strong>{certificateValidityPeriod}</strong>
      </p>
      <p>
        Размер платы, взимаемой при осуществлении административной процедуры:
        <strong>{boardSize}</strong>
      </p>
      <BtnIsOpen onClick={animate} style={{margin: '4% auto'}}>
        <p>Документы и (или) сведения для осуществления административной процедуры: </p>
        <div>
          {' '}
          {isOpen ? (
            <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
          ) : (
            <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
          )}
        </div>
      </BtnIsOpen>
      <Div className={isOpen && `shake`}>{documents}</Div>
      <BtnIsOpen onClick={animateClose}>
        <p>Контактная информация: </p>{' '}
        <div>
          {' '}
          {isClose ? (
            <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
          ) : (
            <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
          )}
        </div>
      </BtnIsOpen>
      <Div className={isClose && `shake`}>{contactInform}</Div>
      <hr />
    </ContainerInformAboutService>
  );
}
