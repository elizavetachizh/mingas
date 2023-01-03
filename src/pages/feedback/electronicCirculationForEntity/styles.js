import styled from 'styled-components';

export const TextForInformation = styled.div`
  font-size: 18px;
  text-align: justify;
  margin-bottom: 20px;
  a{
    text-transform: uppercase;
  }
`;
export const ContainerInform = styled.div`
  padding: 10px 15px 0;
  border: 1px solid #cccccc;
  width: 50%;
  border-radius: 20px;
  margin: 0 auto;
  text-align: justify;
  
  &.electronic-appeal-for-entity {
    p{
      text-align: justify;
      text-indent: 25px;
    }
    @media (max-width: 900px) {
      width: 70%;
    }
    @media (max-width: 600px) {
      width: 90%;
    }
  }
  h2 {
    margin: 1rem auto;
  }
  a {
    text-decoration: none;
    color: #0d4475;
  }
  button {
    width: 150px;
    height: 50px;
  }
  @media (max-width: 720px) {
    width: 80%;
  }
`;
