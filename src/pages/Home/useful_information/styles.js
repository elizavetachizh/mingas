import styled from 'styled-components';

export const DivUsefulInform = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  justify-content: center;
  margin: 10px auto 10px;
  align-items: center;
  background-color: rgba(14, 78, 129, 0.2);
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
    margin: 0 auto 0;
  }
`;

export const DivInform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  //margin: 2% auto;

  @media (max-width: 1100px) {
    width: 96%;
  }
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
