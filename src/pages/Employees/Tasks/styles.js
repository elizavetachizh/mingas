import styled from 'styled-components';

export const Body = styled.div`
  margin: 10%;
  padding: 0 4%;
  width: 900px;
  display: flex;
  text-align: center;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid black;
  div {
    margin: 10px;
  }
    p {
      margin: 0;
      text-align: center;
      padding: 0;
    }
    h3, h4 {
      margin: 0;
      padding: 0;
      text-align: center;
    }
    div{
      display: flex;
      flex-direction: row;
      text-align: center;
      align-items: center;
      margin: 0;
    }
  }
`;
