import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  h1 {
    color: #000;
  }
  @media (max-width: 640px) {
    width: 650px;
  }
`;

export const ContainerGraditude = styled.div`
  img {
    width: 300px;
    &.visibleOpen{
      width: 500px;
    }
  }
`;

export const ContainerCertificats = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 930px) {
    img {
      width: 70%;
    }
  }
`;
