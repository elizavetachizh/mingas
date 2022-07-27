import React, { useState } from 'react';
import { Div, BtnIsOpen, ContainerInformAboutService } from '../styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Name } from "../../Header/styles";

export default function DopFunctional({
                                        serviceName,
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
      <Name>{serviceName}</Name>
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
      <BtnIsOpen onClick={animate}>
        <p>Документы и (или) сведения для осуществления административной процедуры: </p>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </BtnIsOpen>
      <Div className={isOpen && `shake`}>{documents}</Div>
      <BtnIsOpen onClick={animateClose}>
        <p>Контактная информация: </p> {isClose ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </BtnIsOpen>
      <Div className={isClose && `shake`}>{contactInform}</Div>
      <hr />
    </ContainerInformAboutService>
  );
}
