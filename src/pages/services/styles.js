import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DivServices = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 2% auto;
  justify-content: center;
  @media (max-width: 550px) {
    width: 550px;
  }
`;

export const ButtonLink = styled(NavLink)`
  text-align: justify;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  color: #0d4475 !important;
  margin: 0 14px;
  &.active {
    color: #a69b14;
  }
`;
