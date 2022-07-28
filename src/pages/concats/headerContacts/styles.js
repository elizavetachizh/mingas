import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderCompanyDiv = styled.div`
  margin: 0 2%;
  height: fit-content;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;  background: #e8f3ff;
`;

export const HeaderConcatsBtn = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  text-align: left;
  color: #0d4475;
  padding: 0.8rem;
  &:active {
    color: #a69b14;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
