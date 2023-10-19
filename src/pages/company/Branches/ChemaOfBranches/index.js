import { Parallax } from 'react-parallax';
import { Container } from '../../styles';
import React, { useCallback, useEffect, useRef, useState } from 'react';
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
import { Text } from '../../../Home/Content/styles';
import { Main, WindowDiv } from '../../../Home/slider/styles';
import { ContainerParallax } from '../styles';
import { BtnOpenInform } from '../../../../components/MethodPayment/styles';
import ScrollToTop from 'react-scroll-up';
import up from '../../../../assets/png/up_arrow_round.png';
import Loader from '../../../../components/Loader';

export default function SchemaOfBranches({ name, background, carta, info }) {
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState('');
  const [content, setContent] = useState('');

  const animate = useCallback(
    (el) => {
      setIsOpen(true);
      setId(el._id);
      setContent(el.content);
      if (isOpen) {
        setIsOpen(false);
      }
      if (id === el._id) {
        setId('');
        setContent('');
      }
    },
    [id, isOpen]
  );

  const myRef = useRef(null);
  const scrollEffect = (targetRef) => {
    targetRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };
  const element = document.getElementById(`content-${id}`);

  useEffect(() => {
    if (element && !element.innerHTML) {
      element.innerHTML += content;
    }
  }, [content, element]);

  return (
    <Container>
      <Header />
      <ContainerParallax>
        <Parallax style={{ height: '450px' }} bgImage={background} strength={-200}>
          <Main className={'branches'}>
            <WindowDiv>
              <Text style={{ textAlign: 'center' }}>{name}</Text>
              <BtnOpenInform onClick={() => scrollEffect(myRef)}>Подробнее</BtnOpenInform>
            </WindowDiv>
          </Main>
        </Parallax>
      </ContainerParallax>
      <AdditionalDiv style={{ margin: '0 auto 4%' }} ref={myRef}>
        {info?.length ? (
          <>
            {' '}
            {info?.map((el) => (
              <General className={'leave-feedback'}>
                <BtnIsOpen onClick={() => animate(el)}>
                  <p style={{ textAlign: 'center', fontSize: '18px' }}>{el.title}</p>
                  <div>
                    {isOpen && id === el._id ? (
                      <IoIosArrowUp style={{ color: '#0e43af', margin: '38% 0' }} />
                    ) : (
                      <IoIosArrowDown
                        onClick={() => {
                          setId(el._id);
                          setContent(el.content);
                        }}
                        style={{ color: '#0e43af', margin: '38% 0' }}
                      />
                    )}
                  </div>
                </BtnIsOpen>
                <Div className={id === el._id && `shake`}>
                  <DescriptionService id={`content-${el._id}`} />
                </Div>
              </General>
            ))}
          </>
        ) : (
          <Loader />
        )}
        <General style={{ borderRadius: 'none', border: 'none' }} className={'leave-feedback'}>
          {carta}
        </General>
      </AdditionalDiv>
      <ScrollToTop style={{ bottom: '80px' }} showUnder={120}>
        <img src={up} alt={'Вверх'} />
      </ScrollToTop>
      <Footer />
    </Container>
  );
}
