import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderBackgroundColor = {
  gray: `
    background-color: #E9F1F5;
    color: #314D5C
    `,
  blue: `
    background-color: #0D4475;
    color: #FFF;
    `,
  border: `
    color: #FFF;
    border: 1px solid white;
    padding: 10px;
    background-color: rgba(0,0,0,0);
    `,
};

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  text-align: justify;
  justify-content: center;
  //justify-content: space-between;
  font-size: 19px;
  //position: fixed;
  //margin-bottom: 3%;
  top: 0;
  z-index: 5;
  //position: relative;

  margin: 0 auto;
  ${({ backgroundHeader }) => HeaderBackgroundColor[backgroundHeader]};
  .opacity {
    color: #314d5c;
    background-color: rgba(200, 220, 231, 80%);
    Menu {
      opacity: 0;
    }
    @media (max-width: 894px) {
      background-color: rgba(200, 220, 231, 80%);
    }
  }
`;
export const Menu = styled.div`
  display: none;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  @media (max-width: 900px) {
    display: block;
  }
  .opacity {
    background-color: rgba(200, 220, 231, 0%);
    color: #314d5c;
  }
  img {
    margin: 10px;
  }
`;

export const MenuClose = styled.div``;
export const Background = styled.div`
  width: 100%;
  z-index: 5;
  padding: 0 24px;
  margin: 0 auto;
  height: 104px;
  position: fixed;
  top: 0;
  ${({ backgroundHeader }) => HeaderBackgroundColor[backgroundHeader]};
  .opacity {
    background-color: rgba(200, 220, 231, 0%);
    color: #314d5c;
  }
  .click {
    opacity: 1;
  }

  @media (max-width: 900px) {
    background-color: rgba(200, 220, 231, 80%);
  }
`;
export const BackgroundText = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  z-index: 5;
  align-items: center;
  margin: 0 auto;
`
export const LinkLogo = styled(NavLink)``;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const Title = styled.h3``;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  @media (max-width: 1049px) {
    font-size: 14px;
  }
  @media (max-width: 1022px) {
    font-size: 13px;
  }
  @media (max-width: 990px) {
    font-size: 12px;
  }
`;

export const CompanyButton = styled(NavLink)`
  text-decoration: none;
  padding: 0 20px;
  color: #fff;

  &.active {
    color: #a69b14;
  }

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 1285px) {
    display: none;
  }
`;

export const ServicesButton = CompanyButton;
export const ContactButton = CompanyButton;
export const PressCenterButtons = CompanyButton;
export const ServiceCenterButton = CompanyButton;
export const PersonalAccButton = CompanyButton;
export const IconEye = styled.a`
  margin: 0 10px;
`;

export const DivButtonHeader = styled.div`
  display: none;
  position: absolute;
  text-align: justify;
`;
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  &:hover button {
    background-color: #000;
  }

  &:hover div {
    display: flex;
    width: auto;
    min-width: 200px;
    height: auto;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #f1f1f1;
    padding: 10px;
  }
  &:hover div a {
    margin: 5%;
  }
`;

export const GoBack = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 19px;
  text-decoration: none;
  color: #fff;
  &.active {
    color: #a69b14;
  }

  @media (max-width: 900px) {
    display: none;
  }

  @media (max-width: 1285px) {
    display: none;
  }
`;

export const DivFirstHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  text-decoration: none;
  color: #fff;
  padding: 12px 0 0;
  margin: 0 0 12px;
  a {
    text-decoration: none;
    color: #fff;
  }
  p {
    display: inline-block;
    vertical-align: top;
    text-align: right;
    opacity: 0.6;
    color: #fefefe;
    margin: 2px 6px 0 0;
  }
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Div104 = styled.div`
  display: flex;
  align-items: center;
  p{
    font-size: 16px;
  }
  a{
    font-size: 24px;
  }
`;
