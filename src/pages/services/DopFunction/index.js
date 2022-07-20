import React, { useState } from 'react';
import { DescriptionService, ContainerFunctionService } from './styles';
import TitleFun from '../../../components/title';
import {
  BtnIsOpen,
  Div,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
export default function DopFunctionService({
  name,
  description,
  nameDescription,
  description_1,
  nameDescription_1,
  description_2,
  nameDescription_2,
  description_3,
  nameDescription_3,
  description_4,
  nameDescription_4,
  description_5,
  nameDescription_5,
  description_6,
  nameDescription_6,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <ContainerFunctionService>
      <TitleFun color={'blue'} infoTitle={name} />
      <div>
        <BtnIsOpen onClick={animate}>
          <p>{nameDescription}</p> {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </BtnIsOpen>
        <Div className={isOpen && `shake`}>
          <DescriptionService>{description}</DescriptionService>
        </Div>
        {nameDescription_1 && (
          <BtnIsOpen onClick={animate}>
            <p> {nameDescription_1}</p>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </BtnIsOpen>
        )}
        <Div className={isOpen && `shake`}>
          <DescriptionService>{description_1}</DescriptionService>
        </Div>
        {nameDescription_2 && (
          <BtnIsOpen onClick={animate}>
            <p> {nameDescription_2}</p>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </BtnIsOpen>
        )}
        <Div className={isOpen && `shake`}>
          <DescriptionService>{description_2}</DescriptionService>
        </Div>
        {nameDescription_3 && (
          <BtnIsOpen onClick={animate}>
            <p> {nameDescription_3}</p>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </BtnIsOpen>
        )}
        <Div className={isOpen && `shake`}>
          <DescriptionService>{description_3}</DescriptionService>
        </Div>
        {nameDescription_4 && (
          <BtnIsOpen onClick={animate}>
            <p> {nameDescription_4}</p>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </BtnIsOpen>
        )}
        <Div className={isOpen && `shake`}>
          <DescriptionService>{description_4}</DescriptionService>
        </Div>
        {nameDescription_5 && (
          <BtnIsOpen onClick={animate}>
            <p> {nameDescription_5}</p>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </BtnIsOpen>
        )}
        <Div className={isOpen && `shake`}>
          <DescriptionService>{description_5}</DescriptionService>
        </Div>
        {nameDescription_6 && (
          <BtnIsOpen onClick={animate}>
            <p> {nameDescription_6}</p>
            {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </BtnIsOpen>
        )}
        <Div className={isOpen && `shake`}>
          <DescriptionService>{description_6}</DescriptionService>
        </Div>
      </div>
    </ContainerFunctionService>
  );
}
