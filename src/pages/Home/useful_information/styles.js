import styled from 'styled-components';

export const DivUsefulInform = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e9f1f5;
  align-items: center;
`;

export const Title = styled.h2`
  font-style: normal;
  font-size: 32px;
  line-height: 37px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.1em;
  color: #0d4475;
  margin: 4% auto;
  text-align: center;
`;

export const DivInform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  @media (max-width: 800px) {
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
