import styled from 'styled-components';

const titleColor = {
  blue: `
    color: #0d4475`,
  white: `
    color: #FFF`,
};
const titleFontSize = {
  s: `
  font-size: 28px`,
  m: `
  font-size: 32px`,
};
const titleMargin = {
  s: `
  margin: 6% auto 6% auto;
  `
}
export const Title = styled.h2`
  font-style: normal;
  line-height: 37px;
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 32px;
  justify-content: center;
  margin: 14% auto 2% auto;
  text-align: center;
  ${({ color }) => titleColor[color]};
  ${({ margin }) => titleMargin[margin]};
  @media (max-width: 1020px) {
    margin-top: 16%;
  }
  @media (max-width: 640px) {
    font-size: 28px;
    margin-top: 18%;
  }
  @media (max-width: 500px) {
    margin-top: 26%;
  }
  @media (max-width: 400px) {
    margin-top: 30%;
  }
  //@media (max-width: 500px) {
  //  margin-top: 20%;
  //}
  // ${({ fontSize }) => titleFontSize[fontSize]}
`;
