import React, { useState } from 'react';
import { ContainerFunctionService, DescriptionService } from '../../../services/DopFunction/styles';
import { IoIosArrowDown, IoIosArrowUp, IoIosPin, IoMdClock } from 'react-icons/io';
import {
  BtnIsOpen,
  Div,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import TitleForHome from '../../../../components/TitleForHome';
import { LinksNetwork } from '../../../../components/footer/styles';
export default function DopFunctional({ photo, chief, description, contacts, schedule }) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  return (
    <ContainerFunctionService>
      <img style={{width: '50%', margin: '4% auto'}} src={require(`../../../../assets/management/departaments/${photo}.jpg`)} alt={''} />
      <div>
        {' '}
        <TitleForHome color={'blue'} infoTitle={`Начальник - ${chief}`} fontSize={'s'} />
      </div>
      <BtnIsOpen onClick={animate}>
        <p>Основные задачи:</p>
        <div>
          {isOpen ? (
            <IoIosArrowUp style={{ color: '#0e43af', margin: '36% 0' }} />
          ) : (
            <IoIosArrowDown style={{ color: '#0e43af', margin: '36% 0' }} />
          )}
        </div>
      </BtnIsOpen>
      <Div className={isOpen && `shake`}>
        {description !== undefined ? <DescriptionService>{description}</DescriptionService> : <></>}
      </Div>
      <LinksNetwork>
        <IoMdClock style={{ color: '#0e43af', width: '32px', height: '32px' }} />
        {schedule}
      </LinksNetwork>
      <LinksNetwork>
        <IoIosPin style={{ color: '#0e43af', width: '32px', height: '32px' }} />
        {contacts}
      </LinksNetwork>
    </ContainerFunctionService>
  );
}
