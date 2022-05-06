import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const buttonBackgroundColor = {
  gray: `
    background-color: #E9F1F5;
    color: #314D5C`,
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
  font-size: 16px;
  font-weight: 500;
  width: 172px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  left: 1135px;
  margin: 4% auto;
  cursor: pointer;
  ${({ backgroundColor }) => buttonBackgroundColor[backgroundColor]}
`;
