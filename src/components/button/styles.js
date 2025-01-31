import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const buttonBackgroundColor = {
  gray: `
    background-color: #E9F1F5;
    color: #0d4475`,
  blue: `
    background-color:       rgb(15, 89, 141);
     `,
  border: `
    color: #FFF;
    border: 1px solid white;
    background-color: rgba(0,0,0,0);
      &:hover {
    background-color: white;
    color: #0d4475;
  }
    `,
  white: `
    background-color: #FFF;
    color: #0D4475`,
};

export const Button = styled(NavLink)`
  color: white;
  font-size: 16px;
  font-weight: bold;
  width: 300px;
  text-align: center;
  border-radius: 7px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  margin: 0.5rem auto;
  cursor: pointer;
  transition: background-image 0.3s, transform 0.2s, box-shadow 0.2s; /* Плавный переход */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Исходная тень */

  &:hover {
    background-image: linear-gradient(
      -55deg,
      rgb(1, 95, 156) 0%,
      rgb(16, 69, 141) 0%,
      rgb(15, 89, 141) 19%,
      rgb(15, 78, 140) 60%,
      rgb(14, 78, 129) 79%,
      rgb(13, 68, 117) 100%
    );
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2); /* Тень при наведении */
  }

  &:active {
    transform: scale(0.95); /* Эффект нажатия */
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Уменьшенная тень при нажатии */
  }

  &:focus {
    outline: none; /* Убираем стандартный контур фокуса */
    box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.5); /* Тень при фокусе */
  }
  @media (max-width: 950px) {
    width: 250px;
  }
  @media (max-width: 596px) {
    font-size: 14px;
  }
  ${({ backgrounder }) => buttonBackgroundColor[backgrounder]}
`;
