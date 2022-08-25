import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Play', sans-serif;
  @import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');
}
`;
export default GlobalStyle;
const HeaderBackgroundColor = {
  gray: `
    background-color: none;
  
    `,
  blue: `
    background-color: #0d4475;
    `,
  border: `
 a,
  p,
  select,
  img,
  button {
    color: #0d4475;
 }
    border: 1px solid white;
    background-color: white;
    `,
};

export const Container = styled.div`
  display: flex;

  //width: 100%;
  a,
  p,
  select,
  img,
  button {
    color: #0d4475;
  }
  align-items: center;
  font-size: 18px;
  top: 0;
  color: #0d4475;
  z-index: 5;
  margin: 0 auto;
  ${({ backgroundHeader }) => HeaderBackgroundColor[backgroundHeader]};
  .opacity {
    //background-color: rgba(250, 250, 250, 20%);
    //backdrop-filter: blur(30px);
    //a,
    //p,
    //select,
    //img,
    //button {
    //  color: white;
    //}
  }
`;
export const Menu = styled.div`
  a,
  p,
  select,
  img,
  button {
    color: white;
  }
  margin-top: 25px;
  display: none;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  float: left;
  @media (max-width: 900px) {
    display: block;
  }
  img {
    margin: 10px;
  }
`;

export const MenuClose = styled.div`
  margin-top: 25px;
  img {
    margin: 10px;
  }
`;
export const Background = styled.div`
  width: 100%;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0 0 20px 20px;
  z-index: 5;
  //padding: 0 24px;
  background-color: white;
  margin: 0 auto;
  height: fit-content;
  color: #0d4475;
  position: fixed;
  top: 0;
  //.opacity {
  //  background-color: rgba(200, 220, 231, 0%);
  //  color: #0d4475;
  //}
  .click {
    display: block;
  }
  @media (max-width: 900px) {
    background-color: rgba(200, 220, 231, 80%);
    height: 100px;
    display: flex;
    flex-direction: row;
  }
  @media (min-width: 1600px) {
    width: 90%;
  }
  @media (min-width: 2000px) {
    width: 80%;
  }
`;
export const BackgroundText = styled.div`
  max-width: 1300px;
  display: flex;
  flex-direction: row;
  z-index: 5;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 900px) {
    max-width: 100%;
    width: 100%;
  }
`;
export const LinkLogo = styled(NavLink)``;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const ButtonsContainer = styled.div`
  //border-top: 1px solid rgba(204, 204, 204, 0.8);
  display: flex;
  flex-direction: row;
  padding: 4px 0;
  margin: 4px 0;
  height: fit-content;
  align-items: end;
  justify-content: space-around;
  //width: 100%;
  @media (max-width: 1140px) {
    font-size: 17px;
  }
  @media (max-width: 1063px) {
    font-size: 16px;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  @media (max-width: 1140px) {
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  &.active {
    color: #a69b14;
  }
  @media (max-width: 1017px) {
    padding: 0 10px;
  }
  @media (max-width: 900px) {
    display: none;
  }
  span {
    margin: 8px 0 0;
    content: '';
    width: 7px;
    color: #0d4475;
    height: 7px;
    background-color: #0d4475;
    align-items: center;
    text-align: center;
    border-radius: 50%;
    &.active {
      color: #a69b14;
    }
  }
`;

export const ServicesButton = CompanyButton;
export const ContactButton = CompanyButton;
export const PressCenterButtons = CompanyButton;
export const PersonalAccButton = styled.a`
  text-decoration: none;
  justify-content: space-between;
  color: #0d4475;
  display: flex;
  //padding: 0 20px;
  align-items: center;
  &.active {
    color: #a69b14;
  }

  @media (max-width: 1140px) {
    font-size: 17px;
  }
  @media (max-width: 1063px) {
    font-size: 16px;
  }
  @media (max-width: 1017px) {
    font-size: 15px;
  }
`;

export const DivButtonHeader = styled.div`
  display: none;
  position: absolute;
  color: #0d4475;
  border-radius: 30px;
`;
export const Dropdown = styled.div`
  position: relative;
  display: block;

  &:hover div {
    display: flex;
    min-width: 220px;
    width: 250px;
    margin-top: 7px;
    z-index: 3;
    height: fit-content;
    align-items: flex-start;
    flex-direction: column;
    background-color: white;
    border: 1px solid #0d4475;
    padding: 14px;
  }
  &:hover div a {
    margin: 5%;
  }
`;

export const DivFirstHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  text-decoration: none;
  color: #0d4475;
  //padding: 12px 0 0;
  //margin: 12px auto;
  border-bottom: 1px solid rgba(204, 204, 204, 0.8);
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;
export const DivPhone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
  justify-content: space-around;
  width: 40%;
  @media (max-width: 900px) {
    width: 50%;
  }
  @media (max-width: 674px) {
    width: 56%;
  }
`;

export const ContainerElements = styled.div`  
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
  justify-content: space-around;
  width: 20%;
  @media(max-width:900px ){
    width: 30%;
  }
\`;`;
export const Div104 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  width: 30%;
  @media (max-width: 1249px) {
    width: 40%;
  }
  @media (max-width: 937px) {
    width: 50%;
  }
  @media (max-width: 674px) {
    width: 60%;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 0.8s;
    color: white;
  }
  p {
    font-size: 1rem;
    margin: 4px 0;
    font-weight: bold;
    @media (max-width: 1144px) {
      margin: 2px auto;
    }
  }
  div {
    width: 100%;
    border-radius: 20px;
    margin: 0;
    padding: 0;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
      font-weight: bold;
      margin: 0;
      padding: 0;
      font-size: 68px;
      text-decoration: none;
      transition: all 0.3s ease;
      @media (max-width: 1038px) {
        font-size: 3rem;
      }
    }
    &.opacity {
      background: #0d4475;
      border: none;
      a {
        color: white;
      }
    }
  }

  //@media (max-width: 975px) {
  //  p {
  //    font-size: 0.8rem;
  //  }
  //}
  @media (max-width: 780px) {
    p,
    a {
      margin: 0;
    }
    p {
      font-size: 0.8rem;
    }
    a {
      font-size: 1rem;
    }
  }
  @media (max-width: 720px) {
    //padding: 0;
    p,
    a {
      margin: 0;
    }
  }
`;

export const DivPersonalAcc = styled.div`
  @media (max-width: 900px) {
    display: none;
  }
`;
