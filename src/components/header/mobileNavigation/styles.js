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
  font-size: 20px;
  position: fixed;
  margin-bottom: 3%;
  top: 0;
  z-index: 2;
  ${({ backgroundHeader }) => HeaderBackgroundColor[backgroundHeader]};
  }
`;

export const LinksContainer = styled.div`
  flex-direction: column;
  top: 100px;
  left: 0px;
  height: 100%;
  width: 300px;
  background-color: rgba(200, 220, 231, 100%);
  display: flex;
  position: fixed;
  list-style: none;
  padding: 10px;
  margin: 0;
  box-sizing: border-box;
  background-color: #eee;
  transition: left 0.2s;
  z-index: 2;
  -webkit-transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  &.opacity {
    left: 0;
  }
`;

export const CompanyButton = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  padding: 0 20px;
  margin: 10px 0;
  color: #0d4475;
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
export const FeedBackButton = CompanyButton;
export const PersonalAccButton = CompanyButton;

export const DivButtonHeader = styled.div`
  display: none;
  position: absolute;
  margin: 0 20px;
`;
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin: 10px 0;
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
    z-index: 5;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    background-color: #f1f1f1;
    padding: 10px;
  }
  &:hover div a {
    margin: 5%;
  }
`;

export const HiddenMenuTicker = styled.input`
  display: none;
  &:checked {
    left: 0;
  }
`;
