import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  //@media (max-width: 1200px) {
  //  max-height: 600px;
  //}
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const WindowDiv = styled.div`
  max-height: 100%;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;

  //img {
  //  left: 50%;
  //  transition: left 1s;
  //}
  //img {
  //  left: 50%;
  //  transition: left 1s;
  //}
  //@media (max-width: 1200px) {
  //  max-height: 600px;
  //}
  //@media (max-width: 800px) {
  //  display: none;
  //} ;
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
  @media (max-width: 1189px) {
    margin-top: -230px;
    width: 105%;
  }
`;
