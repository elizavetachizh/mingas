import React from 'react';
import { ModalWindow, ModalWindowOpenAndClose, InformModal, Close } from './styles';
import close from '../../assets/png/close.png';
import ModalSubdivision from './modalSubdivision';
import { data } from '../../assets/Subvisions/FirstDeputy';
import { ImageLeader } from '../../pages/company/managment/divmagement/styles';
const closeStyleButton = {
  backgroundImage: `url(${close})`,
};

export default function Modal({ handleCloseCLick, currentLeader, links }) {
  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  console.log(data);
  return (
    <ModalWindow onClick={handleCloseCLick}>
      <ModalWindowOpenAndClose onClick={handleInsideClick}>
        <Close style={closeStyleButton} onClick={handleCloseCLick} />
        <InformModal>
          <ImageLeader src={require(`../../assets/management/${currentLeader.cardImg}.jpg`)} />
          <p>{currentLeader.fullName}</p>
          <p>{currentLeader.position}</p>
          <p>{links}</p>
          <ModalSubdivision links={currentLeader.links} />
        </InformModal>
      </ModalWindowOpenAndClose>
    </ModalWindow>
  );
}
