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
  z-index: 2;
`;

export const ModalWindowOpenAndClose = styled.div`
  width: 700px;
  height: 600px;
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
  padding: 3%;
`;

export const InformModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Close = styled.div`
  cursor: pointer;
  width: 16px;
  height: 16px;
`;
