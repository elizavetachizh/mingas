import styled from 'styled-components';

export const ContainerPosts = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.withImages ? 'row' : 'column')};
  width: 100%;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const ContainerInfoPosts = styled.div`
  width: ${(props) => (props.withImages ? '50%' : '70%')};
  margin: 0 auto;
  font-size: 16px;
  text-align: justify;
  @media (max-width: 960px) {
    width: 90%;
  }
  img {
    //width: 66%;
    max-width: 600px;
    margin-left: 1rem;
    @media (max-width: 900px) {
      margin: 0 15%;
    }
    @media (max-width: 600px) {
      width: 80%;
      margin: 0 10%;
    }
    @media (max-width: 500px) {
      width: 100%;
      margin: 0 auto;
    }
  }
`;
