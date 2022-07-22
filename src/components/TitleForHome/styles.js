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
};
const titleMargin = {
  s: `
  margin: 2% auto 2% auto;
  `,
};
export const Title = styled.h2`
  font-style: normal;
  z-index: 2;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 32px;
  justify-content: center;
  letter-spacing: 0.1em;
  margin: 4% auto;
  text-align: center;
  ${({ color }) => titleColor[color]};
  ${({ margin }) => titleMargin[margin]};
  @media (max-width: 700px) {
    margin-top: 14%;
  }
  @media (max-width: 640px) {
    font-size: 24px;
  }
  @media (max-width: 500px) {
    margin-top: 20%;
  }
  // ${({ fontSize }) => titleFontSize[fontSize]}
`;
