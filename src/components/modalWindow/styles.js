import styled from 'styled-components';

export const ModalWindow = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
  &.header {
    position: absolute;
  }
`;

export const ModalWindowOpenAndClose = styled.div`
  width: 500px;
  height: fit-content;
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  padding: 2%;
  text-align: center;
  border-radius: 20px;
  &.gratitude {
    width: 600px;
  }
  @media (max-width: 530px) {
    margin: 0 2%;
  } ;
`;

export const InformModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: #314d5c;
  img {
    width: 56%;
    @media (max-width: 555px) {
      width: 46%;
    }
    &.gratitude {
      width: 70%;
    }
  }
`;

export const Close = styled.img`
  display: flex;
  cursor: pointer;
  width: 16px;
  height: 16px;
`;
