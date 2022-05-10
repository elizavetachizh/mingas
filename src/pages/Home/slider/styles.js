import styled from 'styled-components';

export const Main = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  @media (max-width: 1200px) {
    max-height: 600px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const WindowDiv = styled.div`
  max-height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    left: 50%;
    transition: left 1s;
  }
  @media (max-width: 1200px) {
    max-height: 600px;
  }
  @media (max-width: 800px) {
    display: none;
  } ;
`;

export const WindowDivMaxWidth = styled.div`
  @media (max-width: 1200px) {
    max-height: 600px;
  }
  @media (min-width: 801px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  img {
    max-width: 40%;
    right: 0;
  }
`;
