import styled from 'styled-components';
export const Input = styled.input`
  padding: 1rem 1rem;
  width: 90%;
  border-radius: 30px;
  margin: 0 auto;
  border: 1px solid #0d4475;
  @media(max-width: 1122px) {
    width: 90%;
    margin: 0 auto;
  }
  //@media(max-width: 944px) {
  //  width: 100%;
  //  margin: 0 auto;
  //}
  //@media(max-width: 640px) {
  //  width: 400px;
  //  margin: 0 auto;
  //}
  @media(max-width: 350px) {
    width: 280px;
    margin: 0 auto;
  }
`;
