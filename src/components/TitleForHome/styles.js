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
  font-size: 28px;
  justify-content: center;
  margin: 4% auto;
  text-align: center;
  ${({ color }) => titleColor[color]};
  ${({ margin }) => titleMargin[margin]};
  &.branches {
    margin: 2% auto;
    @media (max-width: 600px) {
      margin-top: 4%;
    }
  }

  @media (max-width: 700px) {
    margin-top: 10%;
    &.company {
      margin-top: 4%;
      font-size: 18px;
      @media (max-width: 440px) {
        font-size: 16px;
      }
    }
  }
  @media (max-width: 640px) {
    font-size: 22px;
  }
  @media (max-width: 500px) {
    margin-top: 16%;
    font-size: 20px;
  }
  ${({ fontSize }) => titleFontSize[fontSize]}
`;
