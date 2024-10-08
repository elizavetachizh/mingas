import styled, { keyframes } from 'styled-components';
import { arrayData } from './arrayaData';

const slide = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-${arrayData.length * 150}px); }
`;

export const SliderContainer = styled.div`
  width: 100%;
  margin: 1rem auto;
  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  display: flex;
  align-items: center;
  animation: ${slide} 30s linear infinite;
`;

export const Image = styled.img`
  width: 100px;
  margin: 0 1rem;
  height: fit-content;
  flex-shrink: 0;
  &:hover {
    transform: scale(1.1);
    transition: 1s;
  }
`;
