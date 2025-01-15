import styled from 'styled-components';

export const Name = styled.button`
  cursor: pointer;
  color: #314d5c;
  background: none;
  border: none;
  font-size: 16px;
  text-align: justify;
    padding: 0.2rem 0;
  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.p`
  display: flex;
  flex-direction: column;
`;
