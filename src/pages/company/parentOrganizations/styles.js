import styled from 'styled-components';
export const ContainerForInform = styled.div`
  margin: 0 auto;
`;

export const ContainerLinks = styled.div`
  width: 100%;
  justify-content: space-around;
  margin: 0 auto;
  align-items: center;
  display: flex;
  flex-direction: row;

  div {
    
    a {
      text-decoration: none;
      color: #0d4475;
      font-size: 18px;
      text-align: center; img{
     margin: 0 auto;
    }
      p {
        text-align: center;
        width: 50%;
      margin: 0 auto}
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    div {
      margin: 4% auto;
    }
  }
`;
