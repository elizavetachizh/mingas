import styled from 'styled-components';

export const DivInform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  align-items: center;
  margin: 10px auto;
  div {
    p {
      text-indent: 0;
    }
  }
  //@media (max-width: 1034px) {
  //  flex-direction: column;
  //}
`;
