import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  //@media (max-width: 1200px) {
  //  max-height: 600px;
  //}
  &.branches {
    margin: 8% auto 0;
    @media (max-width: 900px) {
      margin: 12% auto 0;
    }
    @media (max-width: 600px) {
      margin: 16% auto 0;
    }
    @media (max-width: 480px) {
      margin: 22% auto 0;
    }
    @media (max-width: 424px) {
      margin: 30% auto 0;
    }
  }
  @media (max-width: 2000px) {
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
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
  }
`;
