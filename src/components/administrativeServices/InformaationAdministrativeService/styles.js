import styled, { keyframes } from 'styled-components';
const opacityAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;
export const Div = styled.div`
  padding: 2%;
  display: none;
  border-radius: 20px;
  margin: 4% auto;
  font-size: 16px;
  border: 1px solid #1b3a91;
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
  border-radius: 30px;
  max-width: 980px;
  margin: 4% 2% 0;
  width: 100%;
`;

export const BtnIsOpen = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  position: relative;
  color: white;
  padding: 0 0.1rem;
  background: #0e43af;
  cursor: pointer;
  margin: 1rem auto;
  border-radius: 50px;
  div {
    background: white;
    border-radius: 50px;
    height: 92%;
    width: 56px;
    text-align: center;
    @media(max-width: 800px) {
      height: 84%;
    }
  }
  p {
    padding: 0 20px;
    width: 90%;
    @media(max-width: 684px) {
      font-size: 14px;
    }
  }
  h3 {
    text-align: center;
    width: 100%;
  }
`;

export const ContainerInformAboutService = styled.div`
  margin: 1rem auto;
  max-width: 980px;
`;
