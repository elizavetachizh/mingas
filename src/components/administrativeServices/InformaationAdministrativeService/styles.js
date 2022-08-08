import styled, { keyframes } from 'styled-components';
const opacityAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
export const Div = styled.div`
  padding: 2%;
  display: none;
  p {
    text-align: left;
  }
  &.shake {
    display: block;
    opacity: 0;
    animation: ${opacityAnimation} 2s forwards;
  }
`;

export const DivBlocks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
export const ContainerInform = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  margin: 4% auto 0;
  width: 100%;
`;

export const BtnIsOpen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: 500;
  color: #3c3838;
  padding: 0 2rem;
  background: #f6f6f6;
  cursor: pointer;
  margin: 1rem 0 1rem 0;
  p {
    padding: 0 10px;
    width: 90%;
  }
`;

export const ContainerInformAboutService = styled.div`
  margin: 1rem auto;
`;
