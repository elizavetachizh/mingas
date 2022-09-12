import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  //@media (max-width: 1200px) {
  //  max-height: 600px;
  //}
  @media (max-width: 1600px) {
    box-shadow: none;
    border-radius: 0;
    margin: 0 auto 0;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const WindowDiv = styled.div`
  max-height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  @media (max-width: 1600px) {
    box-shadow: none;
    border-radius: 0;
  }
`;

export const BackgroundContainer = styled.img`
  position: absolute;
  z-index: -1;
  width: 100%;
  display: flex;
  margin-top: -370px;
  filter: blur(3px) brightness(0.6);
  @media (min-width: 2000px) {
    margin-top: -470px;
  }
  @media (min-width: 2500px) {
    margin-top: -570px;
  }
  @media (min-width: 3000px) {
    margin-top: -700px;
  }
  @media (min-width: 3300px) {
    margin-top: -800px;
  }
  @media (max-width: 1189px) {
    margin-top: -230px;
    width: 105%;
  }
  @media (max-width: 750px) {
    width: 100%;
    margin: -150px auto 0;
  }
  @media (max-width: 550px) {
    width: 100%;
    margin: -80px auto 0;
  }
  @media (max-width: 440px) {
    width: 100%;
    margin: -50px auto 0;
  }
`;
