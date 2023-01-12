import styled from 'styled-components';
export const ContainerForInform = styled.div`
  margin: 0 auto;
  width: 40%;
  div {
    width: 100%;
    margin: 2% auto;
    text-align: center;
  }
  @media (max-width: 700px) {
    width: 70%;
  }
`;

export const ContainerLinks = styled.div`
  width: 100%;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0 auto;
  align-items: start;
  display: flex;
  flex-direction: row;
  div.feedback-yandex {
    width: 500px;
    @media (max-width: 700px) {
      margin: 0 auto;
    }
    @media (max-width: 500px) {
      width: 400px;
    }
    @media (max-width: 405px) {
      width: 320px;
    }
  }
  div {
    a {
      text-decoration: none;
      color: #0d4475;
      font-size: 18px;
      text-align: center;
      img {
        margin: 0 auto;
        height: 80px;
        @media (max-width: 520px) {
          height: 56px;
        }
      }
      p {
        text-align: center;
        width: 50%;
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    margin: 0 auto;
    //div {
    //  margin: 4% auto;
    //}
  }
`;
