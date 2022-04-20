import React from 'react';
import { ModalWindow, ModalWindowOpenAndClose, InformModal, Close } from './styles';
import close from '../../assets/png/close.png';
import ModalSubdivision from './modalSubdivision';
import { data } from '../../assets/Subvisions/FirstDeputy';
const closeStyleButton = {
  backgroundImage: `url(${close})`,
};

export default function Modal({ handleCloseCLick, currentLeader }) {
  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  console.log(data);
  return (
    <ModalWindow onClick={handleCloseCLick}>
      <ModalWindowOpenAndClose onClick={handleInsideClick}>
        <Close style={closeStyleButton} onClick={handleCloseCLick} />
        <InformModal>
          <p>{currentLeader.fullName}</p>
          <p>{currentLeader.position}</p>
          <img src={currentLeader.cardImg} alt={''} />
          <ModalSubdivision links={currentLeader.links} />
        </InformModal>
      </ModalWindowOpenAndClose>
    </ModalWindow>
  );
}
