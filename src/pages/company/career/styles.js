import styled from 'styled-components';

export const DivForm = styled.div`
  text-decoration: none;
  div.form-div-career {
    margin: 0 auto;
    width: 800px;
    @media (max-width: 800px) {
      width: 600px;
    }
    @media (max-width: 600px) {
      width: 400px;
    }
    @media (max-width: 400px) {
      width: 280px;
    }
    @media (max-width: 310px) {
      margin: 0 4px;
    }
  }
`;
