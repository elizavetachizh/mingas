import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
const opacityAnimation = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1; }
`;

export const DivBlocksHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
export const LinksContainer = styled.div`
  flex-direction: column;
  width: 70%;
  margin: 2% auto;
  display: flex;
  @media (max-width: 500px) {
    width: 90%;
  }
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
`;

export const DivButtonHeader = styled.div`
  display: none;
  //position: absolute;
  margin: 0 20px;
  opacity: 0;
  animation: ${opacityAnimation} 1.2s forwards;
  &.shake {
    display: flex;
    width: auto;
    min-width: 200px;
    height: auto;
    align-items: flex-start;
    flex-direction: column;
    z-index: 5;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
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
    a {
      margin: 5%;
      color: white;
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

export const ContainerAbsolute = styled.div`
  flex-direction: column;
  top: 80px;
  height: 90vh;
  width: 100%;
  background-color: rgba(13, 68, 117, 90%);
  display: flex;
  position: fixed;
  margin: 0 0 50px;
  padding-bottom: 20px;
  z-index: 2;
  opacity: 0;
  overflow-y: scroll;
  animation: ${opacityAnimation} 2s forwards;
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 424px) {
    top: 66px;
  }
`;
