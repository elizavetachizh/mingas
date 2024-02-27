import styled from 'styled-components';

const titleColor = {
  blue: `
    color: #0d4475`,
  white: `
    color: #FFF`,
};
const titleFontSize = {
  s: `
  font-size: 24px`,
  m: `
  font-size: 28px`,
  name: `
   font-size: 20px`,
};
const titleMargin = {
  s: `
  margin: 5px auto;
  `,
};
export const Title = styled.h2`
  z-index: 2;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  justify-content: center;
  margin: 2rem auto;
  text-align: center;
  ${({ color }) => titleColor[color]};
  ${({ margin }) => titleMargin[margin]};
  @media (max-width: 700px) {
    font-size: 20px;
  }

  ${({ fontSize }) => titleFontSize[fontSize]}
`;
