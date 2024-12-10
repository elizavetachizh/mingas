import React, { useCallback, useEffect, useState } from 'react';
import { ContainerGraditude, BlockOfGraditude } from '../styles';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import {
  Close,
  InformModal,
  ModalWindow,
  ModalWindowOpenAndClose,
} from '../../../components/modalWindow/styles';
import close from '../../../assets/png/close.png';
import { API } from '../../../backend';
import axios from 'axios';
import Loader from '../../../components/Loader';

export default function Gratitude() {
  const [info, setInfo] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const openImage = useCallback((file) => {
    setImage(file);
    setModalVisible(true);
  }, []);
  const handleInsideClick = (event) => {
    event.stopPropagation();
  };
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  useEffect(() => {
    const apiUrl = `${API}/gratitude_get`;
    axios
      .get(apiUrl)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  return (
    <AdditionalDiv style={{ margin: '4% auto' }}>
      {info?.length ? (
        <React.Fragment>
          <BlockOfGraditude>
            {info.map((element) => (
              <ContainerGraditude key={element._id} onClick={() => openImage(element.file)}>
                <img src={`https://mingas.by/${element.file}`} alt={''} />
              </ContainerGraditude>
            ))}
          </BlockOfGraditude>
          {isModalVisible && (
            <ModalWindow onClick={handleCloseCLick}>
              <ModalWindowOpenAndClose className={'gratitude'} onClick={handleInsideClick}>
                <Close src={close} onClick={handleCloseCLick} />
                <InformModal>
                  <img className={'gratitude'} src={`https://mingas.by/${image}`} alt={''} />
                </InformModal>
              </ModalWindowOpenAndClose>
            </ModalWindow>
          )}
        </React.Fragment>
      ) : (
        <Loader />
      )}
    </AdditionalDiv>
  );
}
