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
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const openImage = useCallback(
    (id) => {
      const current = certifications.find((element) => element.GeneralId === id);
      // setPageNumber(current?.inform[0].id);
      setInform(current?.inform);
      setNumPage(inform?.length);
      setModalVisible(true);
      setGeneralId(id);
      setName(current?.name);
      setPageNumber(1);
      setImage(current?.inform[0].img);
      console.log(current?.name);
    },
    [generalId, inform, name]
  );

  useEffect(() => {
    const current = certifications.find((element) => element.GeneralId === +generalId);
    setInform(current?.inform);
    setGeneralId(current?.GeneralId);
    if (!name) {
      setName(current?.name);
    }

    setNumPage(inform?.length);
    console.log(current?.name);
  }, [pageNumber, inform, generalId, name]);
  const changePage = (offSet) => {
    setPageNumber((prevPAgeNumber) => prevPAgeNumber + offSet);
  };
  const changePageBAck = () => {
    changePage(-1);
    setImage(+image - +1);
  };
  const changePageNext = () => {
    if (pageNumber < numPage) {
      changePage(+1);
      setImage(+image + +1);
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
        <h3>{name}</h3>
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
                  {/*{inform.map((el) => (*/}
                  {/*  <img*/}
                  {/*    className={'gratitude'}*/}
                  {/*    src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${el.img}.png`)}*/}
                  {/*    alt={''}*/}
                  {/*  />*/}
                  {/*))}*/}
                  <img
                    className={'gratitude'}
                    src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${image}.png`)}
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
