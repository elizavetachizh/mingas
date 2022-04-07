import styled from "styled-components";
const buttonBackgroundColor = {
    gray: `
    background-color: #E9F1F5;
    color: #314D5C`,
    blue: `
    background-color: #314D5C;
    color: #FFF`,
    border: `
    color: #FFF;
    border: 1px solid white;
    padding: 10px;
    background-color: rgba(0,0,0,0);
    `,
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
  ${({backgroundColor})=> buttonBackgroundColor[backgroundColor]}
`;