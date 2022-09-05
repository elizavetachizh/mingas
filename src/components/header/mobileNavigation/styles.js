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
export const DivBlocksHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
export const LinksContainer = styled.div`
  flex-direction: column;
  top: 80px;
  height: fit-content;
  width: 500px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
  background-color: rgba(13, 68, 117, 80%);
  backdrop-filter: blur(5px);
  display: flex;
  border-radius: 20px;
  position: fixed;
  padding: 10px;
  margin: 0;
  z-index: 2;
`;

export const CompanyButton = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: row;
  align-items: center;
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
  &.handleBtn {
  }
`;

export const ServicesButton = CompanyButton;
export const ContactButton = CompanyButton;
export const PressCenterButtons = CompanyButton;

export const DivButtonHeader = styled.div`
  display: none;
  //position: absolute;
  margin: 0 20px;
  &.shake {
    display: flex;
    width: auto;
    min-width: 200px;
    height: auto;
    align-items: flex-start;
    flex-direction: column;
    z-index: 5;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #f1f1f1;
    padding: 10px;
    a {
      margin: 5%;
    }
  }
  &.handleBtn {
    display: flex;
    height: fit-content;
    width: 80%;
    align-items: flex-start;
    flex-direction: column;
    padding: 10px;
    background-color: transparent;
    backdrop-filter: blur(5px);
    a {
      margin: 5%;
    }
  }
`;
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  margin: 10px 0;
  &:hover button {
    background-color: #000;
  }
`;
