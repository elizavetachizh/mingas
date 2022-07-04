import styled from 'styled-components';

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const ModalWindowOpenAndClose = styled.div`
  width: 500px;
  height: auto;
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  border-radius: 10px;
  padding: 3%;
  text-align: center;
  @media(max-width: 900px) {
    width: 500px;
  }
`;

export const InformModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #314d5c;
`;

export const Close = styled.img`
  display: flex;
  cursor: pointer;
  width: 16px;
  height: 16px;
`;
