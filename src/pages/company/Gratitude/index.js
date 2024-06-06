import React, { useCallback, useState } from 'react';
import { ContainerGraditude, BlockOfGraditude } from '../styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { gratitude } from '../../../assets/data/gratitude';
import {
  Close,
  InformModal,
  ModalWindow,
  ModalWindowOpenAndClose,
} from '../../../components/modalWindow/styles';
import close from '../../../assets/png/close.png';

export default function Gratitude() {
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const openImage = useCallback((id) => {
    setImage(gratitude[id - 1].img);
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
        {gratitude.map((element) => (
          <ContainerGraditude key={element.id} onClick={() => openImage(element.id)}>
            <img src={require(`../../../assets/pdf/gratitude/${element.img}.webp`)} alt={''} />
          </ContainerGraditude>
        ))}
      </BlockOfGraditude>
      {isModalVisible && (
        <ModalWindow onClick={handleCloseCLick}>
          <ModalWindowOpenAndClose className={'gratitude'} onClick={handleInsideClick}>
            <Close src={close} onClick={handleCloseCLick} />
            <InformModal>
              <img
                className={'gratitude'}
                src={require(`../../../assets/pdf/gratitude/${image}.webp`)}
                alt={''}
              />
            </InformModal>
          </ModalWindowOpenAndClose>
        </ModalWindow>
      )}
    </AdditionalDiv>
  );
}
