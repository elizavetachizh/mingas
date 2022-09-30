import React, { useState } from 'react';
import { DescriptionService } from './styles';
import {
  BtnIsOpen,
  Div,
  General,
} from '../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
export default function DopFunctionService({
  nameDescription,
  inform,
  style,
  classname,
  classnamegeneral,
  key,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    // <ContainerFunctionService>
    <General key={key} className={classnamegeneral} style={style}>
      <BtnIsOpen className={classname} onClick={animate}>
        <p>{nameDescription}</p>
        <div>
          {isOpen ? (
            <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
          ) : (
            <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
          )}
        </div>
      </BtnIsOpen>
      <Div className={isOpen && `shake`}>
        <DescriptionService>{inform}</DescriptionService>
      </Div>
    </General>
    // </ContainerFunctionService>
  );
}
