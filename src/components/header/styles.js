import styled from "styled-components";
import {NavLink} from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  position: fixed;
  top: 0px;
  z-index: 2;
  ${({backgroundHeader}) => HeaderBackgroundColor[backgroundHeader]};
  .opacity {
    color: #314D5C;
    background-color: rgba(200, 220, 231, 80%);
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0px;
  background: transparent;
  z-index: 2;
  ${({backgroundHeader}) => HeaderBackgroundColor[backgroundHeader]};
  .opacity {
    background-color: rgba(200, 220, 231, 80%);
    color: #314D5C;
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
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 720px;
`;

export const CompanyButton = styled(NavLink)`
  text-decoration: none;
  padding: 0 20px;
  color: #2d9cdb;

  &.active {
    color: #fff
  } {
}
`;

export const ServicesButton = CompanyButton;
export const ContactButton = CompanyButton;
export const PressCenterButtons = CompanyButton;
export const ServiceCenterButton = CompanyButton;

const HeaderBackgroundColor = {
    gray:`
    background-color: #E9F1F5,
    color: #314D5C`,
    blue:`
    background-color: #314D5C,
    color: #FFF`,
    border:`
    color: #FFF;
    border: 1px solid white;
    padding: 10px;
    background-color: rgba(0,0,0,0);
    `,
};