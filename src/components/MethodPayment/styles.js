import styled, { keyframes } from 'styled-components';

const opacityAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const ContainerBtn = styled.div`
  max-width: 1140px;
  border: 1px solid #d4d4d4;
  margin: 2% auto;
  display: flex;
  flex-direction: column;
  transition: transform 0.5s;
  &:hover {
    transform: translateY(10px); /* Сдвигаем вниз */
  }
  img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 4% auto;
  }
  div {
    padding: 2%;
    display: none;
    p {
      text-align: justify;
    }
    &.shake {
      display: block;
      opacity: 0;
      animation: ${opacityAnimation} 2s forwards;
    }
  }
`;
export const BtnOpenInform = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  font-weight: 500;
  font-size: 0.9rem;
  line-height: 1.6875em;
  color: #3c3838;
  padding: 0;
  background: #f6f6f6;
  cursor: pointer;
  p {
    padding: 20px;
  }
  img {
    background: #eeeeee;
    padding: 35px;
    margin: 0;
  }
`;

export const ContainerText = styled.div`
  text-align: justify;
  max-width: 980px;
  margin: 0 auto;
  font-size: 16px;
  p {
    text-indent: 25px;
  }
  iframe {
    width: 100%;
    height: 1125px;
    @media (max-width: 1024px) {
      width: 90%;
      margin: 0 5%;
    }
  }
  @media (max-width: 1024px) {
    p,
    ol {
      width: 80%;
      margin: 0 10%;
    }
  }
`;

export const ImgERIP = styled.img`
  margin: 0 auto;
  text-align: center;
  width: 100%;
  @media (max-width: 930px) {
    width: 50%;
  }
`;
