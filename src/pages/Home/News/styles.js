import styled from 'styled-components';

export const DivInform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 30px 5%;
  @media (max-width: 950px) {
    flex-direction: column;
  }
`;
