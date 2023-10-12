import { InformModal, ModalWindow, ModalWindowOpenAndClose } from '../modalWindow/styles';
import React from 'react';
import { Button } from '../formQuestion/styles';

export default function PopUp({ handleCloseCLick, text }) {
  const handleInsideClick = (event) => {
    event.stopPropagation();
  };
  return (
    <ModalWindow onClick={handleCloseCLick}>
      <ModalWindowOpenAndClose onClick={handleInsideClick}>
        <InformModal>{text}</InformModal>
        <Button onClick={handleCloseCLick}>ok</Button>
      </ModalWindowOpenAndClose>
    </ModalWindow>
  );
}
