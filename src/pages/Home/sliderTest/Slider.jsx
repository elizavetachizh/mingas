import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { slides } from './data.js';
import axios from 'axios';
import { API } from '../../../backend';

// Анимации
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(1.05);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const textFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Test = styled.div`
  background-color: rgba(14, 78, 129, 0.1);
  width: 100%;
  margin-top: 9rem;
  @media (max-width: 900px) {
    margin-top: 5rem;
  }
  @media (max-width: 424px) {
    margin-top: 4rem;
  }
`;
const SliderContainer = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  position: relative;
  overflow: hidden;

  @media (max-width: 1300px) {
    max-width: 90vw;
  }
  @media (max-width: 1200px) {
    max-width: 100vw;
  }
  @media (min-width: 1500px) {
    max-width: 70vw;
  }
`;

const SlideWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: ${({ index }) => `translateX(-${index * 100}%)`};
`;

const Slide = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 100%;
  height: 650px;
  @media (max-width: 1030px) {
    height: 580px;
  }
  @media (max-width: 924px) {
    height: 500px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: auto;
  max-width: 100%;
  height: 80%;

  img {
    width: auto;
    max-width: 100%;
    height: 100%;
    object-fit: contain;
    ${({ active }) =>
      active &&
      css`
        animation: ${fadeIn} 1s ease-in;
      `}
  }
`;

const TextBlock = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  opacity: 0;
  ${({ active }) =>
    active &&
    css`
      animation: ${slideIn} 0.8s ease-out 0.5s forwards;
    `};

  @media (max-width: 800px) {
    width: 60%;
  }
  @media (max-width: 600px) {
    width: 70%;
  }
  @media (max-width: 500px) {
    width: 80%;
  }
  @media (min-width: 1400px) {
    width: 45%;
  }
`;

const Button = styled.a`
  background: rgb(15, 89, 141);
  color: white;
  border: none;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 15px;
  width: fit-content;
  transition: background 0.3s ease;

  &:hover {
    background: rgb(13, 68, 117);
  }
`;

const Dots = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -30px;
  z-index: 3;
  position: absolute;
  width: 100%;
  gap: 8px;
`;

const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: none;
  background: ${({ active }) => (active ? 'rgb(15, 89, 141)' : '#bbb')};
  opacity: ${({ active }) => (active ? 1 : 0.6)};
  transition: all 0.3s ease;
  cursor: pointer;
  padding: 1px !important;
  &:hover {
    background: rgb(13, 68, 117);
    opacity: 1;
  }
`;

// Текст внутри блока, появляющийся плавно
const Title = styled.h2`
  color: white;
  opacity: 0;
  ${({ active }) =>
    active &&
    css`
      animation: ${textFadeIn} 0.8s ease-out 1s forwards;
    `}
`;

const Description = styled.p`
  opacity: 0;
  overflow: auto;
  color: white;
  a {
    color: white;
  }
  ${({ active }) =>
    active &&
    css`
      animation: ${textFadeIn} 0.8s ease-out 1.2s forwards;
    `}
`;

const MySlider = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/articles`)
      .then((res) => {
        setInfo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 40000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Test>
      <SliderContainer>
        <SlideWrapper index={index}>
          {info.map((slide, i) => (
            <Slide key={slide.id}>
              <ImageContainer active={i === index}>
                <img style={{ filter: 'brightness(0.8)' }} src={slide.image} alt={slide.button} />
              </ImageContainer>
              <TextBlock active={i === index}>
                <Title active={i === index}>{slide.button}</Title>
                <Description
                  active={i === index}
                  dangerouslySetInnerHTML={{ __html: slide?.content }}
                />
                {slide?.link && (
                  <Button
                    rel="noreferrer"
                    target={'_blank'}
                    href={slide?.link}
                    active={i === index}
                  >
                    Подробнее
                  </Button>
                )}
              </TextBlock>
            </Slide>
          ))}
        </SlideWrapper>

        <Dots>
          {info.map((_, i) => (
            <Dot key={i} active={i === index} onClick={() => setIndex(i)} />
          ))}
        </Dots>
      </SliderContainer>
    </Test>
  );
};

export default MySlider;
