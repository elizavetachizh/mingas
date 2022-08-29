import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  @media (max-width: 640px) {
    width: 650px;
  }
  @media (max-width: 350px) {
    width: 350px;
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
`;

export const ContainerGraditude = styled.div`
  margin: auto;
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
button{
  border: none;
  background: none;
}
`;
