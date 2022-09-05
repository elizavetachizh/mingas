import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  @media (max-width: 640px) {
    width: 100%;
    margin: 0 auto;
  }

`;
export const BlockOfGraditude = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
`;

export const ContainerGraditude = styled.div`
  margin: 0;
  img {
    width: 260px;
    &.visibleOpen {
      width: 500px;
    }
  }
`;

export const ContainerOfDocuments = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

export const DivButtons = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
  button {
    border: none;
    background: none;
  }
`;

export const Link = styled.div`
  color: #0d4475;
  text-align: center;
  cursor: pointer;
  margin: 2% auto;
  width: 100%;
  font-weight: bold;
  font-size: 20px;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.8s;
  }
`;
