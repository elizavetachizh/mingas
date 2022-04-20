import styled from 'styled-components';

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const WindowDiv = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;

  img {
    left: 50%;
    transition: left 1s;
  }
`;
