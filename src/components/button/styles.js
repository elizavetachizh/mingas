import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const buttonBackgroundColor = {
  gray: `
    background-color: #E9F1F5;
    color: #0d4475`,
  blue: `
    background-color: #0D4475;
    color: #FFF`,
  border: `
    color: #FFF;
    border: 1px solid white;
    background-color: rgba(0,0,0,0);
    `,
};

export const Button = styled(NavLink)`
  color: white;
  font-size: 18px;
  font-weight: 500;
  width: 300px;
  text-align: center;
  border-radius: 7px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 4% auto;
  z-index: 3;
  cursor: pointer;
  ${({ backgroundColor }) => buttonBackgroundColor[backgroundColor]}
`;
