import React from 'react';
import { ModalWindow, ModalWindowOpenAndClose, InformModal, Close } from './styles';
import close from '../../assets/png/close.png';
import ModalSubdivision from './modalSubdivision';
import { ImageLeader } from '../../pages/company/managment/divmagement/styles';

export default function Modal({ handleCloseCLick, currentLeader }) {
  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <ModalWindow onClick={handleCloseCLick}>
      <ModalWindowOpenAndClose onClick={handleInsideClick}>
        <Close src={close} onClick={handleCloseCLick} />
        <InformModal>
          <ImageLeader src={require(`../../assets/management/${currentLeader.cardImg}.jpg`)} />
          <p>{currentLeader.fullName}</p>
          <p>{currentLeader.position}</p>
         <strong>
           Курируемые направления:</strong>
          <ModalSubdivision links={currentLeader.links} />
        </InformModal>
      </ModalWindowOpenAndClose>
    </ModalWindow>
  );
}
