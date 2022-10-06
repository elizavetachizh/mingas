import { Parallax } from 'react-parallax';
import { Container } from '../../styles';
import React, { useEffect, useRef, useState } from 'react';
import { AdditionalDiv } from '../../../concats/GeneralContactInform/styles';
import Header from '../../../../components/header';
import Footer from '../../../../components/footer';
import {
  BtnIsOpen,
  Div,
  General,
} from '../../../../components/administrativeServices/InformaationAdministrativeService/styles';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { DescriptionService } from '../../../services/DopFunction/styles';
import { DivText, Text } from '../../../Home/Content/styles';
import { Main, WindowDiv } from '../../../Home/slider/styles';
import { Name } from '../../../../components/administrativeServices/Header/styles';
import { ContainerParallax } from '../styles';
import { BtnOpenInform } from '../../../../components/MethodPayment/styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../../assets/png/up_arrow_round.png';

export default function SchemaOfBranches({
  name,
  background,
  nameDescription,
  description,
  nameProducts,
  products,
  photo,
  inform,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const animate = () => {
    setIsOpen(true);
    if (isOpen) {
      setIsOpen(false);
    }
  };
  const [isClose, setIsClose] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
    window.scrollTo(0, 0);
  }, []);
  const animateClose = () => {
    setIsClose(true);
    if (isClose) {
      setIsClose(false);
    }
  };
  const myRef = useRef(null);
  const scrollEffect = (targetRef) => {
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setShowTopBtn(true);
  };
  return (
    <Container>
      <Header />
      <ContainerParallax>
        <Parallax style={{ height: '450px' }} bgImage={background} strength={-200}>
          <Main className={'branches'}>
            <WindowDiv>
              <DivText>
                <Text style={{ textAlign: 'center' }}>{name}</Text>
              </DivText>
              <BtnOpenInform onClick={() => scrollEffect(myRef)}>Подробнее</BtnOpenInform>
            </WindowDiv>
          </Main>
        </Parallax>
      </ContainerParallax>
      <AdditionalDiv style={{ margin: '0 auto 4%' }} ref={myRef}>
        <General className={'leave-feedback'}>
          <BtnIsOpen onClick={animate}>
            <p style={{ textAlign: 'center', fontSize: '18px' }}>{nameDescription}</p>
            <div>
              {isOpen ? (
                <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
              ) : (
                <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
              )}
            </div>
          </BtnIsOpen>
          <Div className={(isOpen || showTopBtn) && `shake`}>
            <DescriptionService>{description}</DescriptionService>
          </Div>
        </General>
        {products && (
          <General className={'leave-feedback'}>
            {' '}
            <BtnIsOpen onClick={animateClose}>
              <p style={{ textAlign: 'center', fontSize: '18px' }}>{nameProducts}</p>
              <div>
                {isClose ? (
                  <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
                ) : (
                  <IoIosArrowDown style={{ color: '#0e43af', margin: '38% 0' }} />
                )}
              </div>
            </BtnIsOpen>
            <Div className={isClose && `shake`}>
              <DescriptionService>{products}</DescriptionService>
            </Div>
          </General>
        )}
        <General style={{ borderRadius: 'none', border: 'none' }} className={'leave-feedback'}>
          <Name>Общая информация</Name>
          <img
            alt={''}
            style={{ width: '50%', margin: '2% 25% 0', textAlign: 'center' }}
            src={photo}
          />
          {inform}
        </General>
      </AdditionalDiv>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
