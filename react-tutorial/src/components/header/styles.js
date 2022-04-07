import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  height: 100px;
  display: flex;
  align-items: center; 
  justify-content: space-between;
  font-family: 'Fira Sans Condensed'; 
  font-size: 16px;
  position: fixed; 
  background:transparent ;
  top:0px;
  z-index: 2;

  
  .active {
    color: #314D5C;
    background-color: rgba(200,220,231,80%);
  }
`;

export const Background= styled.div`
  width: 100%;

  height: 80px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top:0px;
  background: transparent;
  z-index: 2;
 
  :active {
    background-color: rgba(200,220,231,80%);
    color: #314D5C;
  }
`;

export const LinkLogo=styled(NavLink)`
  background-color: rgba(0,0,0,0%);
  :hover {
    background-color: rgba(0,0,0,0);
  }
  .active {
    background-color: rgba(0,0,0,0%);
  }
`;

export const Logo = styled.img`
  background-color: rgba(0,0,0,0%);
  width:60px;
  height: 60px;
  transform: rotate(90deg);
`;

export const Title = styled.h3``;

export const ButtonsContainer=styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;

export const LinksContainer=styled.div`
  background-color: rgba(0,0,0,0%);
  display:flex;
  justify-content: center;
  max-width: 720px;
  `;

export const CompanyButton=styled(NavLink)`
  background-color: rgba(0,0,0,0%);
  color:#2d9cdb;
  text-decoration: none;
  padding: 0px 20px 0px 20px;
`;

export const ServicesButton=CompanyButton;
export const ContactButton=CompanyButton;
export const PressCenterButtons=CompanyButton;
export const ServiceCenterButton=CompanyButton;
export const HeaderDiv = styled.div`
  ${({backgroundHeader})=> HeaderBackgroundColor[backgroundHeader]}
`;
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
