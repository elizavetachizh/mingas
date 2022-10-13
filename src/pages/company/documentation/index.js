import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  BlockOfGraditude,
  Container,
  ContainerGraditude,
  ContainerOfDocuments,
  DivButtons,
} from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import TitleForHome from '../../../components/TitleForHome';
import '@brainhubeu/react-carousel/lib/style.css';
import { documents } from '../../../assets/data/certifications';
import {
  Close,
  InformModal,
  ModalWindow,
  ModalWindowOpenAndClose,
} from '../../../components/modalWindow/styles';
import close from '../../../assets/png/close.png';
import minsk from '../../../assets/background/phone.webp';
import Feedback from '../../feedback';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';

export default function Documentation() {
  const [numPage, setNumPage] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [generalId, setGeneralId] = useState(null);
  const [inform, setInform] = useState([]);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const certifications = useMemo(
    () => documents.filter((document) => document.name === 'Сертификаты'),
    [documents]
  );

  const licenses = useMemo(
    () => documents.filter((document) => document.name === 'Лицензии'),
    [documents]
  );
  const evidence = useMemo(
    () => documents.filter((document) => document.name === 'Свидетельства'),
    [documents]
  );
  const chits = useMemo(
    () => documents.filter((document) => document.name === 'Аттестаты'),
    [documents]
  );

  const openImage = useCallback(
    (id) => {
      const current = documents.find((element) => element.GeneralId === id);
      setInform(current?.inform);
      setNumPage(inform?.length);
      setModalVisible(true);
      setGeneralId(id);
      setName(current?.name);
      setPageNumber(1);
      setImage(current?.inform[0].img);
    },
    [generalId, inform, name]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
    const current = documents.find((element) => element.GeneralId === +generalId);
    setInform(current?.inform);
    setGeneralId(current?.GeneralId);
    if (!name) {
      setName(current?.name);
    }
    setNumPage(inform?.length);
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

  const handleInsideClick = (event) => {
    event.stopPropagation();
  };

  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);

  return (
    <Container>
      <Header backgroundHeader="blue" />
      <Feedback className={'none'} img={minsk} name={'Сертификаты, лицензии, свидетельства'} />
      <HeaderCompany />
      <AdditionalDiv style={{ margin: '4% auto' }}>
        <ContainerOfDocuments>
          <TitleForHome className={'company'} color={'blue'} infoTitle={certifications[0].name} />
          <BlockOfGraditude>
            {certifications.map((element) => (
              <ContainerGraditude
                key={element.GeneralId}
                onClick={() => openImage(element.GeneralId)}
              >
                <img
                  src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${element.inform[0].img}.webp`)}
                  alt={''}
                />
              </ContainerGraditude>
            ))}
          </BlockOfGraditude>
        </ContainerOfDocuments>
        <ContainerOfDocuments>
          <TitleForHome color={'blue'} infoTitle={licenses[0].name} />
          <BlockOfGraditude>
            {licenses.map((element) => (
              <ContainerGraditude
                key={element.GeneralId}
                onClick={() => openImage(element.GeneralId)}
              >
                <img
                  src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${element.inform[0].img}.webp`)}
                  alt={''}
                />
              </ContainerGraditude>
            ))}
          </BlockOfGraditude>
        </ContainerOfDocuments>
        <ContainerOfDocuments>
          <TitleForHome color={'blue'} infoTitle={evidence[0].name} />
          <BlockOfGraditude>
            {evidence.map((element) => (
              <ContainerGraditude
                key={element.GeneralId}
                onClick={() => openImage(element.GeneralId)}
              >
                <img
                  src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${element.inform[0].img}.webp`)}
                  alt={''}
                />
              </ContainerGraditude>
            ))}{' '}
          </BlockOfGraditude>
        </ContainerOfDocuments>
        <ContainerOfDocuments>
          {' '}
          <TitleForHome color={'blue'} infoTitle={chits[0].name} />
          <BlockOfGraditude>
            {chits.map((element) => (
              <ContainerGraditude
                key={element.GeneralId}
                onClick={() => openImage(element.GeneralId)}
              >
                <img
                  src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${element.inform[0].img}.webp`)}
                  alt={''}
                />
              </ContainerGraditude>
            ))}
          </BlockOfGraditude>
        </ContainerOfDocuments>
        {isModalVisible && (
          <ModalWindow onClick={handleCloseCLick}>
            <ModalWindowOpenAndClose className={'gratitude'} onClick={handleInsideClick}>
              <Close src={close} onClick={handleCloseCLick} />
              <InformModal>
                <img
                  className={'gratitude'}
                  src={require(`../../../assets/pdf/certificates/Certificate_SNKIiTD/${image}.webp`)}
                  alt={''}
                />
                <DivButtons>
                  {pageNumber > 1 && <button onClick={changePageBAck}>Предыдущая</button>}
                  <p>
                    Страница {pageNumber} из {numPage}
                  </p>
                  <button onClick={changePageNext}>Следующая</button>
                </DivButtons>
              </InformModal>
            </ModalWindowOpenAndClose>
          </ModalWindow>
        )}
      </AdditionalDiv>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
