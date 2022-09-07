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
          <Main style={{ margin: '8% auto 0' }}>
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
        <General style={{ width: '60%', margin: '2% auto 4%' }}>
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
        {products ? (
          <General style={{ width: '60%', margin: '0 auto 4%' }}>
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
        ) : (
          <></>
        )}
        <div style={{ width: '60%', margin: '0 auto' }}>
          <Name>Общая информация</Name>
          <img style={{ width: '50%', margin: '4% 25%', textAlign: 'center' }} src={photo} />
          {inform}
        </div>
      </AdditionalDiv>
      <Footer />
    </Container>
  );
}
