import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 102px;
  background-color:#C8DCE7;
  display: flex;
  align-items: center; 
  justify-content: space-around;
  font-family: 'Play'; 
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
`;

export const Logo = styled.img`
  width:70px;
  height: 70px;
  transform: rotate(90deg)`;

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
  color: #314D5C;
  text-decoration: none;
  padding: 0px 20px 0px 20px;
`;

export const ServicesButton=CompanyButton;
export const ContactButton=CompanyButton;
export const PressCenterButtons=CompanyButton;
export const ServiceCenterButton=CompanyButton;

export const Account = styled.button`
  color: white;
  background-color: #314D5C;
  font-family: 'Play'; 
  font-size: 16px;
  font-weight: 700;
  line-height: 19px;
  width: 172px;
  height: 40px;
  left: 1135px;
  top: 36px;
  filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.25));
`;