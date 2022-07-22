import React, { useState } from 'react';
import { DescriptionService, ContainerFunctionService } from './styles';
import {
  BtnIsOpen,
  Div,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
export default function DopFunctionService({ nameDescription, inform }) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <ContainerFunctionService>
      <BtnIsOpen onClick={animate}>
        <p>{nameDescription}</p>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </BtnIsOpen>
      <Div className={isOpen && `shake`}>
        <DescriptionService>{inform}</DescriptionService>
      </Div>
    </ContainerFunctionService>
  );
}
