import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const buttonBackgroundColor = {
  gray: `
    background-color: #E9F1F5;
    color: #0d4475`,
  blue: `
     background-image: linear-gradient(
    -55deg,
    rgb(1, 95, 156) 0%,
    rgb(16, 69, 141) 0%,
    rgb(15, 89, 141) 19%,
    rgb(15, 78, 140) 60%,
    rgb(14, 78, 129) 79%,
    rgb(13, 68, 117) 100%
  );
    color: #FFF`,
  border: `
    color: #FFF;
    border: 1px solid white;
    background-color: rgba(0,0,0,0);
    `,
  white: `
    background-color: #FFF;
    color: #0D4475`,
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
  margin: 2% auto;
  z-index: 2;
  cursor: pointer;
  &.post {
    @media (max-width: 950px) {
      width: 220px;
      font-size: 16px;
      height: 40px;
    }
    @media (max-width: 600px) {
      width: 170px;
      height: 30px;
      margin: 2% 0;
    }
    @media (max-width: 480px) {
      width: 140px;
      font-size: 14px;
    }
    @media (max-width: 400px) {
      width: 120px;
      height: 30px;
      font-size: 12px;
    }
  }
  @media (max-width: 950px) {
    width: 250px;
    font-size: 16px;
  }
  @media (max-width: 596px) {
    width: 200px;
  }
  @media (max-width: 480px) {
    width: 170px;
    height: 40px;
  }
  @media (max-width: 400px) {
    width: 150px;
  }
  ${({ backgrounder }) => buttonBackgroundColor[backgrounder]}
`;
