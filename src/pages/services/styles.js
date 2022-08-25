import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DivServices = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 10% auto;
  justify-content: center;
  @media (max-width: 550px) {
    width: 550px;
  }
`;

export const ButtonLink = styled(NavLink)`
  width: 100%;
  text-align: left;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  color: #0d4475 !important;
  margin: 0;
  &.active {
    color: #a69b14;
  }
  span {
    display: none;
    position: absolute;
  }
  &:hover span {
    display: flex;
    min-width: 200px;
    height: fit-content;
    left: 100%;
    flex-direction: column;
    text-align: left;
    border-radius: 30px;
    border: 1px solid #0d4475;
    //box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 0 24px;
    margin: 0 auto;
    top: 0;
    a {
      color: #0d4475;
      text-decoration: none;
    }
  }
`;
