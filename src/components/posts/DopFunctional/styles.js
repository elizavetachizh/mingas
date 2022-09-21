import styled from 'styled-components';

export const ContainerPosts = styled.div`
  width: 80%;
  margin: 0 auto;
  font-size: 18px;
  text-align: justify;
  img {
    width: 50%;
    margin: 0 25%;
    @media (max-width: 900px) {
      width: 70%;
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
