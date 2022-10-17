import styled from 'styled-components';

export const BtnOpenInform = styled.button`
  color: #0d4475;
  font-size: 18px;
  font-weight: 500;
  width: 220px;
  text-align: center;
  border-radius: 7px;
  text-decoration: none;
  display: flex;
  border: none;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin: 2% auto;
  z-index: 2;
  cursor: pointer;
`;

export const ContainerText = styled.div`
  text-align: justify;
  max-width: 980px;
  margin: 0 auto;
  font-size: 16px;
  a {
    color: #0d4475;
  }
  p {
    text-indent: 25px;
  }
  div {
    margin: 0 2%;
  }
  iframe {
    width: 100%;
    height: 1125px;
    @media (max-width: 1024px) {
      width: 90%;
      margin: 0 5%;
    }
  }
  @media (max-width: 1024px) {
    p,
    ol {
      width: 80%;
      margin: 0 10%;
    }
  }
`;

export const ImgERIP = styled.img`
  margin: 0 30%;
  text-align: center;
  width: 40%;
  @media (max-width: 550px) {
    width: 60%;
    margin: 0 20%;
  }
  @media (max-width: 400px) {
    width: 70%;
    margin: 0 15%;
  }
  &.big {
    width: 70%;
    margin: 0 15%;
    @media (max-width: 900px) {
      width: 90%;
      margin: 0 5%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin: 0 auto;
    }
  }
`;
