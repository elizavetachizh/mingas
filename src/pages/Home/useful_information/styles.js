import styled from 'styled-components';

export const DivUsefulInform = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  //box-shadow: 0 11px 6px -11px rgba(0, 0, 0, 0.3);
  @media (max-width: 640px) {
    width: 650px;
  }
`;

export const DivInform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin: 2% auto;

  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
