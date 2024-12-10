import React, { useCallback, useEffect, useState } from 'react';
import { BlockOfGraditude, ContainerGraditude, ContainerOfDocuments, DivButtons } from '../styles';
import TitleForHome from '../../../components/TitleForHome';
import '@brainhubeu/react-carousel/lib/style.css';
import {
  Close,
  InformModal,
  ModalWindow,
  ModalWindowOpenAndClose,
} from '../../../components/modalWindow/styles';
import close from '../../../assets/png/close.png';
import { API } from '../../../backend';
import axios from 'axios';

export default function Documentation() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const apiUrl = `${API}/certificates`;
    axios
      .get(apiUrl)
      .then((res) => {
        const groupByFileType = (array) => {
          return array.reduce((acc, current) => {
            const { fileType, ...rest } = current;
            // Проверяем, есть ли уже такая группа
            if (!acc[fileType]) {
              acc[fileType] = { fileType, info: [] };
            }
            // Добавляем информацию в соответствующую группу
            acc[fileType].info.push(rest);
            return acc;
          }, {});
        };

        // Преобразуем объект в массив
        const groupedData = Object.values(groupByFileType(res.data));
        setInfo(groupedData);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [setInfo]);

  const [pageNumber, setPageNumber] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(null);
  const [element, setElement] = useState('');
  const openImage = useCallback(
    (fileType, id) => {
      const current = info.find((element) => element.fileType === fileType);
      const element = current.info.find((element) => element._id === id);
      setElement(element);
      setModalVisible(true);
      setPageNumber(1);
      setImage(0);
    },
    [info]
  );
  const changePage = (offSet) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
    setImage((prevImage) => prevImage + offSet);
  };

  const changePageBAck = () => {
    changePage(-1);
  };

  const changePageNext = () => {
    if (pageNumber < element?.paths?.length) {
      changePage(+1);
    }
  };

  const handleInsideClick = (event) => {
    event.stopPropagation();
  };

  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <>
      {info.map((element) => (
        <ContainerOfDocuments>
          <TitleForHome
            color={'blue'}
            infoTitle={
              element.fileType === 'certificates'
                ? 'Сертификаты'
                : element.fileType === 'attestations'
                ? 'Аттестаты'
                : element.fileType === 'licenses'
                ? 'Лицензии'
                : 'Свидетельства'
            }
          />
          <BlockOfGraditude>
            {element.info?.map((file) => (
              <ContainerGraditude
                key={file._id}
                onClick={() => openImage(element.fileType, file._id)}
              >
                <img src={`https://mingas.by/${file.paths[0]}`} alt={''} />
              </ContainerGraditude>
            ))}
          </BlockOfGraditude>
        </ContainerOfDocuments>
      ))}

      {isModalVisible && (
        <ModalWindow onClick={handleCloseCLick}>
          <ModalWindowOpenAndClose className={'gratitude'} onClick={handleInsideClick}>
            <Close src={close} onClick={handleCloseCLick} />
            <InformModal>
              <img
                className={'gratitude'}
                src={`https://mingas.by/${element.paths[image]}`}
                alt={''}
              />
              <DivButtons>
                {pageNumber > 1 && <button onClick={changePageBAck}>Предыдущая</button>}
                <p>
                  Страница {pageNumber} из {element?.paths?.length}
                </p>
                <button onClick={changePageNext}>Следующая</button>
              </DivButtons>
            </InformModal>
          </ModalWindowOpenAndClose>
        </ModalWindow>
      )}
    </>
  );
}
