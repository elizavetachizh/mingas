import styled from 'styled-components';
export const Input = styled.input`
  padding: 1rem 1rem;
  width: 90%;
  border-radius: 30px;
  margin: 0 auto;
  border: 1px solid #0d4475;
  background-color: rgba(255, 255, 255, 0.6);
  @media (max-width: 1122px) {
    width: 90%;
    margin: 0 auto;
  }
  &.message {
    height: 100px;
  }
`;

export const TextArea = styled.textarea`
  padding: 1rem 1rem;
  width: 90%;
  border-radius: 30px;
  margin: 0 auto;
  border: 1px solid #0d4475;
  height: 100px;
  background-color: rgba(255, 255, 255, 0.6);
  @media (max-width: 1122px) {
    width: 90%;
    margin: 0 auto;
  }
`;
