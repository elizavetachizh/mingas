import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  border: 1px solid #0d4475;
  width: 60%;
  padding: 4%;
  border-radius: 30px;
  @media (max-width: 880px) {
    width: 70%;
  }
  @media (max-width: 640px) {
    width: 100%;
    max-width: 100%;
  }
`;

export const DivApplication = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  @media (max-width: 640px) {
    width: 100%;
    max-width: 100%;
  }
`;
