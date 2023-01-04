import React, { useCallback, useEffect, useState } from 'react';
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
  keys,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  // const element = ;
  const getElement = useCallback((inform) => {
    return document.getElementById(`description-${inform}`);
  }, []);
  useEffect(() => {
    const element = getElement(inform);
    if (element) {
      element.innerHTML += inform;
    }
  }, [ getElement]);
  return (
    <General key={keys} className={classnamegeneral} style={style}>
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
        <DescriptionService id={`description-${inform}`} />
      </Div>
    </General>
  );
}
