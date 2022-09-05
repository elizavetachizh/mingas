import styled from 'styled-components';

export const DivUsefulInform = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  justify-content: center;
  margin: 10px auto 0;
  align-items: center;
  background-image: linear-gradient(
    -55deg,
    rgba(1, 95, 156, 0.08) 0%,
    rgba(16, 69, 141, 0.2) 0%,
    rgba(15, 89, 141, 0.2) 19%,
    rgba(15, 78, 140, 0.26) 50%,
    rgba(14, 78, 129, 0.28) 70%,
    rgba(13, 68, 117, 0.3) 90%
  );
  //box-shadow: 0 11px 6px -11px rgba(0, 0, 0, 0.3);
  //@media (max-width: 640px) {
  //  width: 650px;
  //}
  @media (max-width: 1600px) {
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
  margin: 2% auto;

  @media (max-width: 1100px) {
    width: 100%;
  }
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
