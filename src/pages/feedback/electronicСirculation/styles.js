import styled from 'styled-components';

export const TextForInformation = styled.div`
  font-size: 18px;
  text-align: justify;
  margin-bottom: 20px;
  text-indent: 25px;
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
    
  a {
    text-decoration: none;
    color: #0d4475;
  }
  @media (max-width: 720px) {
    width: 80%;
  }
`;
