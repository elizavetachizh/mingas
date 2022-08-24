import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  @media (max-width: 640px) {
    width: 650px;
  }
  //@media(min-width: 1500px){
  //  width: 90%;
  //}
  
`;

export const ContainerGraditude = styled.div`
  img {
    width: 300px;
    &.visibleOpen {
      width: 500px;
    }
  }
`;
