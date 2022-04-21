import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderBackgroundColor = {
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
  top: 0;
  z-index: 2;
  ${({ backgroundHeader }) => HeaderBackgroundColor[backgroundHeader]};
  .opacity {
    background-color: rgba(200, 220, 231, 80%);
    color: #314d5c;
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
  max-width: 780px;
`;

export const CompanyButton = styled(NavLink)`
  text-decoration: none;
  padding: 0 20px;
  color: #fff;

  &.active {
    color: #a69b14;
  }
`;

export const ServicesButton = CompanyButton;
export const ContactButton = CompanyButton;
export const PressCenterButtons = CompanyButton;
export const ServiceCenterButton = CompanyButton;

export const IconEye = styled.img`
  margin: 0 10px;
`;
