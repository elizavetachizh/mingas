import styled from 'styled-components';

export const DivUsefulInform = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e9f1f5;
  align-items: center;
  @media (max-width: 640px) {
    width: 640px;
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  justify-content: center;
  letter-spacing: 0.1em;
  color: #0d4475;
  margin: 4% auto;
  text-align: center;
  @media (max-width: 700px) {
   margin-top: 14%;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    margin-top: 20%;
  }
`;

export const DivInform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 90%;
  margin-bottom: 6%;
  @media (max-width: 1100px) {
    width: 100%;
  }
  //@media (max-width: 975px) {
  //  width: 90%;
  //}
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

export const UsefulInformContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const Line = styled.div`
  height: 1px;
  background: #0d4475;
  width: 90rem;
  margin: 2rem auto;
  max-width: 100%;
`;
