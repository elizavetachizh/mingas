import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BlockOfGraditude, Container, ContainerGraditude } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleForHome from '../../../components/TitleForHome';
import '@brainhubeu/react-carousel/lib/style.css';
import { certifications } from '../../../assets/data/certifications';
import {
  Close,
  InformModal,
  ModalWindow,
  ModalWindowOpenAndClose,
} from '../../../components/modalWindow/styles';
import close from '../../../assets/png/close.png';

export default function Documentation() {
  const [numPage, setNumPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [generalId, setGeneralId] = useState(null);
  const [inform, setInform] = useState([]);
  const [image, setImage] = useState(1);
  const openImage = useCallback(
    (id) => {
      const current = certifications.find((element) => element.GeneralId === id);
      setPageNumber(current?.inform[0].id);
      setNumPage(current.inform.length);
      setModalVisible(true);
      setGeneralId(id);
    },
    [generalId, image]
  );

  useEffect(() => {
    if (!inform) {
      const current = certifications.find((element) => element.GeneralId === +generalId);
      setInform(current?.inform);
      setGeneralId(current?.GeneralId);
      setNumPage(inform?.id);
      const currentImage = current.image.find((element) => element.img === setImage);
      setImage(currentImage?.img);
    }
  }, [pageNumber, inform, generalId, image]);

  const changePage = (offSet) => {
    setPageNumber((prevPAgeNumber) => prevPAgeNumber + offSet);
  };
  const changePageBAck = () => {
    changePage(-1);
  };
  const changePageNext = () => {
    if (pageNumber < numPage) {
      changePage(+1);
    }
  };
  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);
  return (
    <Container>
      <Header backgroundHeader="blue" />
      <HeaderCompany currentPage={'documentation'} />
      <TitleForHome infoTitle={'Сертификаты, лицензии, свидетельства'} color={'blue'} />
      <AdditionalDiv>
        <BlockOfGraditude>
          {certifications.map((element) => (
            <ContainerGraditude onClick={() => openImage(element.GeneralId)}>
              <img
                src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${element.inform[0].img}.png`)}
                alt={''}
              />
            </ContainerGraditude>
          ))}
          {isModalVisible && (
            <ModalWindow onClick={handleCloseCLick}>
              <ModalWindowOpenAndClose className={'gratitude'} onClick={handleInsideClick}>
                <Close src={close} onClick={handleCloseCLick} />
                <InformModal>
                  {inform.map((el) => (
                    <img
                      className={'gratitude'}
                      src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${el.img}.png`)}
                      alt={''}
                    />
                  ))}
                  <p>
                    Page {pageNumber} of {numPage}
                  </p>
                  {pageNumber > 1 && <button onClick={changePageBAck}>pre</button>}
                  <button onClick={changePageNext}>next</button>
                </InformModal>
              </ModalWindowOpenAndClose>
            </ModalWindow>
          )}
        </BlockOfGraditude>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
