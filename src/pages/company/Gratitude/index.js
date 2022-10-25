import React, { useCallback, useState } from 'react';
import { Container, ContainerGraditude, BlockOfGraditude } from '../styles';
import HeaderCompany from '../header_company';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import { AdditionalDiv } from '../../concats/GeneralContactInform/styles';
import { gratitude } from '../../../assets/data/gratitude';
import {
  Close,
  InformModal,
  ModalWindow,
  ModalWindowOpenAndClose,
} from '../../../components/modalWindow/styles';
import close from '../../../assets/png/close.png';
import Feedback from '../../feedback';
import minsk from '../../../assets/background/phone.webp';
import ScrollToTop from 'react-scroll-up';
import up from '../../../assets/png/up_arrow_round.png';

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
    <Container>
      <Header backgroundHeader="blue" />
      <Feedback className={'none'} img={minsk} name={'Благодарности и награды'} />
      <HeaderCompany currentPage={'gratitude'} />

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
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
