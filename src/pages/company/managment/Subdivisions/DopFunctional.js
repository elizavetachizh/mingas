import React, { useState } from 'react';
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
export default function DopFunctional({ name, photo, chief, description, contacts, schedule }) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <ContainerFunctionService>
      <Name style={{ color: 'white', textDecoration: 'none' }}>{name}</Name>
      {photo && (
        <img src={require(`../../../../assets/management/departaments/${photo}.jpg`)} alt={''} />
      )}
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
            <DescriptionService>{description}</DescriptionService>
          </Div>
        </General>
      )}
      <BlockClockAndPin>
        {schedule && (
          <LinksNetwork>
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
