import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DivServices = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 2% auto;
  justify-content: center;
  @media (max-width: 550px) {
    width: 600px;
  }
`;

export const InformServices = styled.div`
  margin: 6% auto;
  @media (max-width: 1500px) {
    margin: 10% auto;
  }
  @media (max-width: 550px) {
    width: 600px;
  }
`;

export const ButtonsServices = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ButtonLink = styled(NavLink)`
  font-size: 16px;
  text-align: justify;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  color: #0d4475;
  margin: 0 14px;
  &.active {
    color: #a69b14;
  }
`;
