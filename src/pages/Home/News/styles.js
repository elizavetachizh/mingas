import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #e9f1f5;
  margin: 0px;
  align-items: center;
  padding: 50px 0;
  @media (max-width: 640px) {
    width: 640px;
  }
`;

export const DivInform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px 5%;
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;
