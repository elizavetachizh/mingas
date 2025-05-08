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
  const openImage = useCallback((id) => {
    setModalVisible(id);
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
        <ContainerGraditude key={'1'}>
        <div>
          <a
            type={'download'}
            href={
              'https://back.mingas.by/admin/upload/files/1738046979037-Политика_Мингаз_для сайта.pdf'
            }
          >
            Политика обработки персональных данных УП "МИНГАЗ"
          </a>
        </div>
        <div>
          <a
            type={'download'}
            href={
              'https://back.mingas.by/admin/upload/files/1737614292790-Политика_куки_Мингаз_для сайта.pdf'
            }
          >
            Политика обработки файлов cookie УП «МИНГАЗ»
          </a>
        </div>
        <div>
          <a
            type={'download'}
            href={
              'https://back.mingas.by/admin/upload/files/1746681219432-Политика видеонаблюдения УП МИНГАЗ.pdf'
            }
          >
            Политика видеонаблюдения УП «МИНГАЗ»
          </a>
        </div>
          <img
            style={{ width: '600px', maxWidth: '100%' }}
            src={require(`../../../assets/pdf/managment/3.webp`)}
            alt={''}
            onClick={() => openImage(3)}
          />
          <img
            style={{ width: '600px', maxWidth: '100%' }}
            src={require(`../../../assets/pdf/managment/2.webp`)}
            alt={''}
            onClick={() => openImage(2)}
          />
          <img
            style={{ width: '600px', maxWidth: '100%' }}
            src={require(`../../../assets/pdf/managment/4.webp`)}
            alt={''}
            onClick={() => openImage(4)}
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
                src={require(`../../../assets/pdf/managment/${isModalVisible}.webp`)}
                alt={''}
              />
            </InformModal>
          </ModalWindowOpenAndClose>
        </ModalWindow>
      )}
    </AdditionalDiv>
  );
}
