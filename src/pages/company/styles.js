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
export const BlockOfGraditude = styled.div`
display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`

export const ContainerGraditude = styled.div`
  
  margin: auto;
  img {
    width: 300px;
    &.visibleOpen {
      width: 500px;
    }
  }
`;
