import styled from 'styled-components';

export const Body = styled.div`
  margin: 10%;
  padding: 0 4%;
  width: 400px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid black;
  div {
    margin: 10px;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style-type: none;
    li{
      margin: 5%;
    }
    p{
      margin: 0;
    }
    div{
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0;
    }
  }
`;
