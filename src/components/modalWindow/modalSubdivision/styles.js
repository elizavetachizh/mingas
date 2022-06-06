import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Name = styled.button`
  cursor: pointer;
  color: #314d5c;
  background: none;
  border: none;
  font-size: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

export const Container = styled.p`
  display: flex;
  flex-direction: column;
`;
