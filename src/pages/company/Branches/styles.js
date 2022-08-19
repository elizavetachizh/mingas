import styled from 'styled-components';

export const BlockInformOgonek = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: fit-content;
  margin: 6% auto;
  justify-content: space-around;
  //border-radius: 20px;
  //border: 1px solid #1b3a91;
  div {
    width: 50%;
    margin: 0 auto;
    font-size: 16px;
    text-align: justify;
    h4 {
      text-align: center;
      color: #4574ee;
      font-size: 28px;
      margin: 1% auto;
      line-height: 1.3;
      font-weight: 300;
      text-transform: uppercase;
      background-position: center center;
      border-color: transparent;
      border-style: solid;
    }
  }

  img {
    width: 46%;
    border-radius: 20px;
  }
`;

export const ContainerParallax = styled.div`
  margin-top: 150px;
  height: fit-content;
  @media (max-width: 1400px) {
    height: 500px;
  }
  @media (max-width: 1000px) {
    height: 400px;
  }
  @media (max-width: 700px) {
    margin-top: 100px;
  }
`;
