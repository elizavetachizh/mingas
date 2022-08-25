import React, { useCallback, useEffect, useState } from 'react';
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
  const [numPage, setNumPage] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const [isModalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState('');
  const [generalId, setGeneralId] = useState(1);
  const [inform, setInform] = useState([]);
  const [currentServiceID, setServiceID] = useState(null);
  const openImage = useCallback(
    (id) => {
      setModalVisible(true);
      if (currentServiceID === id) {
        setServiceID(null);
        setVisible(false);
      } else {
        setServiceID(id);
        setVisible(true);
      }
    },
    [visible, currentServiceID]
  );

  useEffect(() => {
    if (!inform.length && !inform) {
      const current = certifications.find((element) => element.GeneralId === generalId);
      setInform(current.inform);
      setGeneralId(current.GeneralId);
      setNumPage(inform.id);
    }
  }, [pageNumber, inform]);
  const changePage = (offSet) => {
    setPageNumber((prevPAgeNumber) => prevPAgeNumber + offSet);
  };
  const changePageBAck = () => {
    changePage(-1);
  };
  const changePageNext = () => {
    changePage(+1);
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
          {generalId === 1 &&
            certifications.map((element) => (
              <ContainerGraditude onClick={() => openImage(element.id)}>
                <img
                  className={currentServiceID === element.id && visible}
                  src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${pageNumber}.png`)}
                  alt={''}
                />
              </ContainerGraditude>
            ))}
          {isModalVisible && (
            <ModalWindow onClick={handleCloseCLick}>
              <ModalWindowOpenAndClose className={'gratitude'} onClick={handleInsideClick}>
                <Close src={close} onClick={handleCloseCLick} />
                <InformModal>
                  <img
                    className={'gratitude'}
                    src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${pageNumber}.png`)}
                    alt={''}
                  />
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
