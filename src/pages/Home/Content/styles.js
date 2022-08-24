import styled from 'styled-components';

export const ContainerContent = styled.div`
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  @media (max-width: 1200px) {
    max-height: 800px;
  }
  @media (max-width: 640px) {
    width: 650px;
  }
`;

export const DivContent = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  border-radius: 10px;
  bottom: 0;
  @media (max-width: 1200px) {
    max-height: 900px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-radius: 10px;
  align-items: center;
  @media (max-width: 870px) {
    img {
      width: 100%;
      
    }
  }
  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
      margin: 0 auto;
    }
  }
`;

export const DivInformAbout = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Text = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #ffff;
  text-transform: uppercase;
  @media (max-width: 1200px) {
    font-size: 26px;
  }
  @media (max-width: 800px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const DivPrizes = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.25);
  height: 510px;
  @media (max-width: 1200px) {
    max-height: 900px;
  }
`;

export const Prizes = styled.div`
  display: flex;
  flex-direction: row;
  img {
    margin: 10px;
    width: 50px;
    height: 50px;
  }
`;
