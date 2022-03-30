import styled from "styled-components";
const buttonBackgroundColor = {
    gray: `
    background-color: #E9F1F5;
    color: #314D5C`,
    blue: `
    background-color: #314D5C;
    color: #FFF`,
};

export const Button = styled.button`
  color: white;
  font-family: 'Fira Sans Condensed';
  font-size: 16px;
  font-weight: 500;
  width: 172px;
  height: 40px;
  left: 1135px;
  top: 36px;
  filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.25));
  ${({backgroundColor})=> buttonBackgroundColor[backgroundColor]}
`;