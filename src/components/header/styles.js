import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderBackgroundColor = {
  gray: `
    background-color: #E9F1F5;
    color: #314D5C
    `,
  blue: `
    background-color: #0d4475;
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
  width: 100%;
  align-items: center;
  text-align: justify;
  justify-content: center;
  font-size: 19px;
  top: 0;
  z-index: 5;
  margin: 0 auto;
  a,
  p,
  select,
  img,
  button {
    color: white;
  }
  ${({ backgroundHeader }) => HeaderBackgroundColor[backgroundHeader]};
  .opacity {
    color: #314d5c;
    a,
    p,
    select,
    img,
    button {
      color: #314d5c;
    }
    background-color: rgba(200, 220, 231, 80%);
    @media (max-width: 894px) {
      background-color: rgba(200, 220, 231, 80%);
    }
    //@media (max-width: 650px) {
    //  width: 650px;
    //}
  }
`;
export const Menu = styled.div`
  margin-top: 25px;
  display: none;
  cursor: pointer;
  background: rgba(0, 0, 0, 0);
  border: rgba(0, 0, 0, 0);
  float: left;
  @media (max-width: 900px) {
    display: block;
  }
  //.opacity {
  //  background-color: rgba(200, 220, 231, 0%);
  //  color: #314d5c;
  //  margin-top: 0;
  //}
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
  z-index: 5;
  padding: 0 24px;
  margin: 0 auto;
  height: 150px;
  position: fixed;
  top: 0;
  ${({ backgroundHeader }) => HeaderBackgroundColor[backgroundHeader]};
  .opacity {
    background-color: rgba(200, 220, 231, 0%);
    color: #314d5c;
  }
  .click {
    display: block;
  }
//@media(max-width: 1220px){
//  padding: 0;
//}
  @media (max-width: 900px) {
    background-color: rgba(200, 220, 231, 80%);
    height: 100px;
    display: flex;
    flex-direction: row;
    @media (max-width: 630px) {
      margin-left: 50px;
    }
    @media (max-width: 580px) {
      margin-left: 70px;
    }
    @media (max-width: 550px) {
      margin-left: 100px;
    }
    @media (max-width: 520px) {
      margin-left: 130px;
    }
    @media (max-width: 490px) {
      margin-left: 160px;
    }
    @media (max-width: 460px) {
      margin-left: 200px;
    }
    @media (max-width: 420px) {
      margin-left: 240px;
    }
    @media (max-width: 380px) {
      margin-left: 280px;
    }
    @media (max-width: 340px) {
      margin-left: 320px;
    }
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

export const Title = styled.h3``;

export const ButtonsContainer = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: row;
  padding: 20px 0;
  height: 50%;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 1140px) {
    font-size: 17px;
  }
  @media (max-width: 1063px) {
    font-size: 16px;
  }
  @media (max-width: 1017px) {
    font-size: 15px;
  }
  @media (max-width: 975px) {
    font-size: 13px;
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
  color: white !important;
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
  color: #fff;
  &.active {
    color: #a69b14;
  }
  @media (max-width: 900px) {
    display: none;
  }
`;

export const ServicesButton = CompanyButton;
export const ContactButton = CompanyButton;
export const PressCenterButtons = CompanyButton;
export const PersonalAccButton = styled.a`
  text-decoration: none;
  justify-content: space-around;
  display: flex;
  padding: 0 20px;
  color: white;
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
  @media (max-width: 975px) {
    font-size: 13px;
  }
`;

export const IconEye = styled.a`
  margin: 0 10px;
`;

export const DivButtonHeader = styled.div`
  display: none;
  position: absolute;
  color: #314d5c !important;
`;
export const Dropdown = styled.div`
  position: relative;
  display: inline-block;
  //&:hover a {
  //  background-color: #000;
  //  color: #314d5c !important;  
  //}

  &:hover div {
    display: flex;
    width: auto;
    min-width: 220px;
    height: fit-content;
    align-items: flex-start;
    flex-direction: column;
    //box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.4);
    background-color: #e8f3ff;
    padding: 14px;
  }
  &:hover div a {
    margin: 5%;
  }
`;

export const GoBack = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 19px;
  text-decoration: none;
  color: #fff;
  &:active {
    color: #a69b14;
  }
  @media (max-width: 900px) {
    display: none;
  }
  @media (max-width: 1285px) {
    display: none;
  }
`;

export const DivFirstHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: space-around;
  text-decoration: none;
  color: #fff;
  padding: 12px 0 0;
  margin: 0 0 12px;
  //@media(max-width: 900px) {
  //  position: absolute;
  //  top: 0;
  //}
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const DivPhone = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40%;
  @media(max-width: 900px) {
    width: 50%;
  }
  @media(max-width: 720px) {
    width: 60%;
  }
`
export const Div104 = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  justify-content: space-around;
  background: #df1e17;
  border-radius: 2px;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
  border: 2px solid #df1e17;
  p {
    font-size: 1rem;
    line-height: 1.2;
  }
  a {
    margin: 0 0.6rem;
    font-family: Play, sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #fff;
    font-size: 1.6rem;
    line-height: 1.25;
    text-decoration: none;
    -webkit-text-decoration-color: rgba(255, 255, 255, 0);
    text-decoration-color: rgba(255, 255, 255, 0);
    transition: all 0.3s ease;
    @media (max-width: 1170px) {
      font-size: 1.4rem;
    }
  }
  &:hover {
    background: none;
  }
  @media (max-width: 1133px) {
    padding: 0 0.8rem;
  }
  @media (max-width: 1029px) {
    padding: 0 0.5rem;
    //a {
    //  margin: 0.8rem;
    //}
  }

  @media (max-width: 975px) {
   p{
     font-size: 0.8rem;
   }
  }
  @media (max-width: 780px) {
    //padding: 0;
    p,
    a {
      margin: 0;
     
    }
    p{
      font-size: 0.8rem;
    }
    a{
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

export const DropdownBlock = styled.div`
  position: relative;
  display: inline-block;
  &:hover a {
    background-color: #000;
    color: #314d5c !important;
  }

  &:hover div {
    display: flex !important;
    width: auto;
    min-width: 200px;
    height: auto;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #f1f1f1;
    //padding: 10px;
  }
  &:hover div a {
    margin: 5%;
    display: flex !important;
    width: auto;
    min-width: 200px;
    height: auto;
    align-items: flex-start;
    flex-direction: column;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
    background-color: #f1f1f1;
    //padding: 10px;
  }
`;

export const DivButtonBlock = styled.div`
  display: none !important;
  position: absolute;
`;
