import React from 'react';
import { ModalWindow, ModalWindowOpenAndClose, InformModal, Close } from './styles';
import close from '../../assets/png/close.png';
import ModalSubdivision from './modalSubdivision';

export default function Modal({ handleCloseCLick, currentLeader, nameId, index }) {
  const handleInsideClick = (event) => {
    event.stopPropagation();
  };
  return (
    <ModalWindow key={index} onClick={handleCloseCLick}>
      <ModalWindowOpenAndClose onClick={handleInsideClick}>
        <Close src={close} onClick={handleCloseCLick} />
        <InformModal>
          <img alt={currentLeader.fullName} src={`${currentLeader.image}`} />
          <p style={{fontWeight:"bold"}}>{currentLeader.fullName}</p>
          <p style={{fontWeight:"bold"}}>{currentLeader.position}</p>
          <p
            style={{
              margin: '0.5rem auto',
              textAlign: 'left',
              fontWeight: 'normal',
              color: '#333',
              opacity: '0.8',
            }}
          >
            Телефон:{' '}
            <a
              style={{ color: '#0077c1' }}
              href={`tel:${currentLeader.contact_phone}`}
              type={'phone'}
            >
              {currentLeader.contact_phone}
            </a>
          </p>
          <strong>Курируемые направления:</strong>
          <ModalSubdivision linksId={nameId} links={currentLeader.department} />
        </InformModal>
      </ModalWindowOpenAndClose>
    </ModalWindow>
  );
}
