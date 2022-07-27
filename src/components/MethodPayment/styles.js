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
    transition: transform 0.5s;
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
export const Div = styled.button`
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
  &:active {
    div {
      transition: 5s;
    }
  }
`;
export const DivClose = Div;

export const ContainerText = styled.div`
  text-align: justify;
  max-width: 1140px;
  margin: 0 auto;
  font-size: 16px;
  p {
    text-indent: 25px;
  }
  iframe {
    width: 100%;
    height: 1125px;
  }
`;
