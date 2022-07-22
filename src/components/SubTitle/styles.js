import styled from 'styled-components';

const titleColor = {
  blue: `
    color: #0d4475`,
  white: `
    color: #FFF`,
};
const titleFontSize = {
  s: `
  font-size: 18px;
   text-transform: none;
   `,
  m: `
  font-size: 22px`,
};
export const SubTitle = styled.h2`
  font-style: normal;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 26px;
  justify-content: center;
  letter-spacing: 0.1em;
  margin: 0 auto;
  text-align: center;
  ${({ color }) => titleColor[color]};
  ${({ fontSize }) => titleFontSize[fontSize]};
  @media (max-width: 700px) {
    margin-top: 14%;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    margin-top: 20%;
  }
`;
