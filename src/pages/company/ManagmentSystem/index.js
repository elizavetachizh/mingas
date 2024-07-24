import React, { useCallback, useState } from 'react';
import { ContainerGraditude, BlockOfGraditude } from '../styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import {
  Close,
  InformModal,
  ModalWindow,
  ModalWindowOpenAndClose,
} from '../../../components/modalWindow/styles';
import close from '../../../assets/png/close.png';

export default function ManagmentSystem() {
  const [isModalVisible, setModalVisible] = useState(false);
  const openImage = useCallback(() => {
    setModalVisible(true);
  }, []);
  const handleInsideClick = (event) => {
    event.stopPropagation();
  };
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);
  return (
    <AdditionalDiv style={{ margin: '4% auto' }}>
      <BlockOfGraditude>
        <ContainerGraditude key={'1'} onClick={() => openImage()}>
          <img
            style={{ width: '600px', maxWidth:'100%' }}
            src={require(`../../../assets/pdf/managment/1.webp`)}
            alt={''}
          />
        </ContainerGraditude>
      </BlockOfGraditude>
      {isModalVisible && (
        <ModalWindow onClick={handleCloseCLick}>
          <ModalWindowOpenAndClose className={'gratitude'} onClick={handleInsideClick}>
            <Close src={close} onClick={handleCloseCLick} />
            <InformModal>
              <img
                className={'gratitude'}
                src={require(`../../../assets/pdf/managment/1.webp`)}
                alt={''}
              />
            </InformModal>
          </ModalWindowOpenAndClose>
        </ModalWindow>
      )}
    </AdditionalDiv>
  );
}
