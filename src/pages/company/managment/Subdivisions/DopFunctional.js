import React, { useCallback, useEffect, useState } from 'react';
import {
  ContainerFunctionService,
  DescriptionService,
  BlockClockAndPin,
} from '../../../services/DopFunction/styles';
import {
  General,
  BtnIsOpen,
  Div,
  IoIosArrowUps,
  IoIosArrowDowns,
  IoMdClocks,
  IoIosPins,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import TitleForHome from '../../../../components/TitleForHome';
import { LinksNetwork } from '../../../../components/footer/styles';
import { Name } from '../../../../components/administrativeServices/Header/styles';
export default function DopFunctional({ name, chief, description, contacts, schedule }) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const getElement = useCallback((name) => {
    return document.getElementById(`description-${name}`);
  }, []);
  useEffect(() => {

    const element = getElement(name);
    if (element) {
      element.innerHTML += description;
    }

  }, [name, getElement, description]);

  return (
    <ContainerFunctionService>
      <Name style={{ color: 'white', textDecoration: 'none' }}>{name}</Name>
      <div>
        <TitleForHome className={'company'} color={'blue'} infoTitle={chief} fontSize={'s'} />
      </div>
      {description && (
        <General>
          <BtnIsOpen style={{ width: '100%' }} onClick={animate}>
            <p>Основные задачи:</p>
            <div>{isOpen ? <IoIosArrowUps /> : <IoIosArrowDowns />}</div>
          </BtnIsOpen>
          <Div className={isOpen && `shake`}>
            <DescriptionService id={`description-${name}`}></DescriptionService>
          </Div>
        </General>
      )}
      <BlockClockAndPin>
        {schedule && (
          <LinksNetwork id={'schedule'}>
            <IoMdClocks />
            {schedule}
          </LinksNetwork>
        )}
        {contacts && (
          <LinksNetwork>
            <IoIosPins />
            {contacts}
          </LinksNetwork>
        )}
      </BlockClockAndPin>
    </ContainerFunctionService>
  );
}
