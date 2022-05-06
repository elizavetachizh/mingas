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
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: rgba(200, 220, 231, 80%);
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80px;
  left: 0;
  width: 100%;
  background-color: rgba(200, 220, 231, 80%);
  border-top: 2px solid white;
`;

export const CompanyButton = styled(NavLink)`
  text-decoration: none;
  padding: 0 20px;
  color: #fff;
  &.active {
    color: #a69b14;
  }
  &:hover {
    color: #a69b14;
  }
`;

export const ServicesButton = CompanyButton;
export const ContactButton = CompanyButton;
export const PressCenterButtons = CompanyButton;
export const ServiceCenterButton = CompanyButton;

export const DivButtonHeader = styled.div`
  display: none;
  position: absolute;
  margin: 50px;
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
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background-color: #f1f1f1;
    padding: 10px;
  }
  &:hover div a {
    margin: 5%;
  }
`;
