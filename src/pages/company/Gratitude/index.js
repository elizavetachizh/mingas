import React, { useCallback, useState } from 'react';
import { Container, ContainerGraditude, BlockOfGraditude } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import TitleForHome from '../../../components/TitleForHome';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { gratitude } from '../../../assets/data/gratitude';
import {
  Close,
  InformModal,
  ModalWindow,
  ModalWindowOpenAndClose,
} from '../../../components/modalWindow/styles';
import close from '../../../assets/png/close.png';
import Feedback from "../../feedback";
import minsk from "../../../assets/background/phone.jpg";

export default function Gratitude() {
  const [currentServiceID, setServiceID] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState('');
  const openImage = useCallback(
    (id) => {
      setServiceID(id);
      setImage(gratitude[id - 1].img);
      setModalVisible(true);
    },
    [currentServiceID]
  );
  const handleInsideClick = (event: MouseEvent) => {
    event.stopPropagation();
  };
  const handleCloseCLick = useCallback(() => {
    setModalVisible(false);
  }, []);
  return (
    <Container>
      <Header backgroundHeader="blue" />
        <Feedback className={'none'} img={minsk} name={'Благодарности и награды'} />
      <HeaderCompany currentPage={'gratitude'} />

      <AdditionalDiv style={{ margin: '4% auto' }}>
        <BlockOfGraditude>
          {gratitude.map((element) => (
            <ContainerGraditude onClick={() => openImage(element.id)}>
              <img src={require(`../../../assets/pdf/gratitude/${element.img}.png`)} alt={''} />
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
                  src={require(`../../../assets/pdf/gratitude/${image}.png`)}
                  alt={''}
                />
              </InformModal>
            </ModalWindowOpenAndClose>
          </ModalWindow>
        )}
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
