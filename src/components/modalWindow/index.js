import React, { useState } from 'react';
import { ModalWindow, ModalWindowOpenAndClose, InformModal, Close } from './styles';
import close from '../../assets/png/close.png';
import { data } from '../../assets/Subvisions/FirstDeputy';
import ModalSubdivision from './modalSubdivision';
const closeStyleButton = {
  backgroundImage: `url(${close})`,
};
export default function Modal({ handleCloseCLick, currentLeader }) {
  const [subdivision, setSubdivision] = useState({});

  return (
    <ModalWindow>
      <ModalWindowOpenAndClose>
        <Close style={closeStyleButton} onClick={handleCloseCLick} />
        <InformModal>
          <p>{currentLeader.fullName}</p>
          <p>{currentLeader.position}</p>
          <img src={currentLeader.cardImg} alt={''} />
        </InformModal>
        {data.map((element) => (
          <ModalSubdivision name={element.name} />
        ))}
      </ModalWindowOpenAndClose>
    </ModalWindow>
  );
}
