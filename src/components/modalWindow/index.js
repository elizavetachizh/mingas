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
          <img
            alt={currentLeader.fullName}
            src={require(`../../assets/management/${currentLeader.cardImg}.webp`)}
          />
          <p>{currentLeader.fullName}</p>
          <p>{currentLeader.position}</p>
          <strong>Курируемые направления:</strong>
          <ModalSubdivision linksId={nameId} links={currentLeader.links} />
        </InformModal>
      </ModalWindowOpenAndClose>
    </ModalWindow>
  );
}
