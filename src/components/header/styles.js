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
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  position: fixed;
  margin-bottom: 3%;
  top: 0;
  z-index: 2;
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
  @media (max-width: 916px) {
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
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  z-index: 2;
  ${({ backgroundHeader }) => HeaderBackgroundColor[backgroundHeader]};
  .opacity {
    background-color: rgba(200, 220, 231, 0%);
    color: #314d5c;
  }
  .click {
    opacity: 1;
  }

  @media (max-width: 916px) {
    background-color: rgba(200, 220, 231, 80%);
  }
`;

export const LinkLogo = styled(NavLink)``;

export const Logo = styled.img`
  width: 60px;
  height: 60px;
  transform: rotate(90deg);
`;

export const Title = styled.h3``;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1076px) {
    font-size: 15px;
  }
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

  @media (max-width: 916px) {
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
