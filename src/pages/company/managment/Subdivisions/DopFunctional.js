import React, { useState } from 'react';
import { ContainerFunctionService, DescriptionService } from '../../../services/DopFunction/styles';
import { IoIosArrowDown, IoIosArrowUp, IoIosPin, IoMdClock } from 'react-icons/io';
import {
  General,
  BtnIsOpen,
  Div,
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
    <ContainerFunctionService style={{ margin: '4% auto' }}>
      <Name style={{ color: 'white', textDecoration: 'none' }}>{name}</Name>
      {photo ? (
        <img
          style={{ width: '40%', margin: '4% auto' }}
          src={require(`../../../../assets/management/departaments/${photo}.jpg`)}
          alt={''}
        />
      ) : (
        <></>
      )}
      <div>
        <TitleForHome color={'blue'} infoTitle={chief} fontSize={'s'} />
      </div>
      {description ? (
        <General>
          <BtnIsOpen style={{ width: '100%' }} onClick={animate}>
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
            <DescriptionService>{description}</DescriptionService>
          </Div>
        </General>
      ) : (
        <></>
      )}
      {schedule ? (
        <LinksNetwork>
          <IoMdClock style={{ margin: '0 4%', color: '#0e43af', width: '35px', height: '35px' }} />
          {schedule}
        </LinksNetwork>
      ) : (
        <></>
      )}
      {contacts ? (
        <LinksNetwork>
          <IoIosPin style={{ margin: '0 4%', color: '#0e43af', width: '40px', height: '40px' }} />
          {contacts}
        </LinksNetwork>
      ) : (
        <></>
      )}
    </ContainerFunctionService>
  );
}
