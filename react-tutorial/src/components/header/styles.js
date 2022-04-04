import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
 width: 100%;
  height: 70px;
  display: flex;
  align-items: center; 
  justify-content: space-around;
  font-family: 'Fira Sans Condensed'; 
  font-size: 16px;
  position: fixed; 
  background:transparent ;
  top:0px;
  z-index: 2;
  .active {
    background:#C8DCE7;
    color: #314D5C;
  }
`;

export const Background= styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top:0px;
  background: transparent;
  z-index: 2;
  .active {
    background:#C8DCE7;
    color: #314D5C;
  }
`;

export const LinkLogo=styled(NavLink)`
`;

export const Logo = styled.img`
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
  display:flex;
  justify-content: center;
  `;

export const CompanyButton=styled(NavLink)`
  color: #fff;
  text-decoration: none;
  padding: 0px 20px 0px 20px;
`;

export const ServicesButton=CompanyButton;
export const ContactButton=CompanyButton;
export const PressCenterButtons=CompanyButton;
export const ServiceCenterButton=CompanyButton;
