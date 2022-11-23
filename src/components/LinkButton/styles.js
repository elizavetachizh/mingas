import styled from 'styled-components';
const linkStylesColor = {
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
    color: #FFF !important`,
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
export const LinkAsButton = styled.a`
  border: 1px solid #0d4475;
  border-radius: 20px;
  font-size: 16px;
  font-weight: 500;
  width: 300px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 4% auto;
  cursor: pointer;
  transition: 0.8s linear;
  @media (max-width: 700px) {
    font-size: 14px;
    width: 280px;
  }
  &:hover {
    transform: scale(1.1);
  }
  ${({ backgrounder }) => linkStylesColor[backgrounder]}
`;
