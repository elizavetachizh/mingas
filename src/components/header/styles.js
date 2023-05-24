import styled, { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoIosClose, IoIosMenu, IoIosSearch, IoMdContact, IoMdEyeOff } from 'react-icons/io';
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
  min-width: 320px;
  width: 100%;
  a,
  p,
  select,
  img,
  button {
    color: white;
  }
  align-items: center;
  font-size: 18px;
  top: 0;
  z-index: 3;
  margin: 0 auto;
  ${({ backgroundHeader }) => HeaderBackgroundColor[backgroundHeader]};
`;
export const Menu = styled.div`
  margin-top: 16px;
  display: none;
  cursor: pointer;
  float: left;
  @media (max-width: 900px) {
    display: block;
  }
  @media (max-width: 424px) {
    margin-top: 10px;
  }
`;

export const MenuClose = styled.div`
  margin-top: 20px;

  img {
    margin: 10px;
  }
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 424px) {
    margin-top: 14px;
  }
`;
export const Background = styled.div`
  width: 100%;
  min-width: 320px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 0 0 20px 20px;
  z-index: 5;
  background-image: linear-gradient(
    -55deg,
    rgb(1, 95, 156) 0%,
    rgb(16, 69, 141) 0%,
    rgb(15, 89, 141) 19%,
    rgb(15, 78, 140) 60%,
    rgb(14, 78, 129) 79%,
    rgb(13, 68, 117) 100%
  );
  //padding: 0 24px;
  //background-color: white;
  margin: 0 auto;
  height: fit-content;
  color: white;
  position: fixed;
  top: 0;
  .click {
    display: block;
  }
  @media (max-width: 900px) {
    background-color: rgba(200, 220, 231, 40%);
    backdrop-filter: blur(50px);
    display: flex;
    height: 80px;
    flex-direction: row;
  }
  @media (max-width: 424px) {
    height: 66px;
  }
  @media (max-width: 2000px) {
    box-shadow: none;
    border-radius: 0;
  }
  @media (min-width: 2000px) {
    width: 90%;
    margin: 0 auto;
  }
`;
export const BackgroundText = styled.div`
  max-width: 1200px;
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
  width: 90px;
  height: 90px;
  @media (max-width: 646px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 424px) {
    width: 60px;
    height: 60px;
  }
  &.gerb {
    width: 70px;
    height: 70px;
    @media (max-width: 646px) {
      width: 60px;
      height: 60px;
    }
    @media (max-width: 424px) {
      width: 50px;
      height: 50px;
    }
  }
`;

export const ButtonsContainer = styled.div`
  //border-top: 1px solid rgba(204, 204, 204, 0.8);
  display: flex;
  flex-direction: row;
  padding: 4px 0;
  margin: 4px 0;
  height: fit-content;
  align-items: end;
  justify-content: space-between;
  width: 100%;
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
  width: 100%;
  margin: 0 auto;
  font-size: 18px;
  @media (max-width: 1140px) {
    font-size: 14px;
  }
  @media (max-width: 1022px) {
    font-size: 13px;
  }
  @media (max-width: 990px) {
    font-size: 12px;
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
    color: white;
    height: 7px;
    background-color: white;
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
  color: white;
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
  border-radius: 30px;
  &.header-btns {
    a {
      color: #0d4475;
    }
  }
`;
export const Dropdown = styled.div`
  position: relative;
  display: block;
  &:hover div {
    display: flex;
    min-width: 220px;
    width: 250px;
    //margin-top: 4px;
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
  color: white;
  //padding: 12px 0 0;
  //margin: 12px auto;
  border-bottom: 1px solid rgba(204, 204, 204, 0.8);
  @media (max-width: 900px) {
    border-bottom: none;
  }
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
  margin: 4px 0;
  justify-content: space-around;
  width: 40%;
  @media (max-width: 900px) {
    width: 60%;
  }
  @media (max-width: 673px) {
    width: 70%;
  }
  @media (max-width: 540px) {
    width: 80%;
  }
`;

export const ContainerElements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 12px 0;
  justify-content: space-around;
  width: 20%;
  @media (max-width: 900px) {
    width: 30%;
  }
  @media (max-width: 1020px) {
    width: 32%;
  }
  @media (max-width: 900px) {
    display: none;
  }
  &.mobile {
    display: flex;
    width: 60%;
    @media (min-width: 900px) {
      display: none;
    }
  }
`;
export const Div104 = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  width: 34%;
  @media (max-width: 1249px) {
    width: 40%;
  }
  @media (max-width: 937px) {
    width: 50%;
  }
  @media (max-width: 674px) {
    width: 64%;
  }
  @media (max-width: 674px) {
    width: 68%;
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
    @media (max-width: 819px) {
      font-size: 0.9rem;
    }
    @media (max-width: 788px) {
      font-size: 0.8rem;
    }
    @media (max-width: 512px) {
      font-size: 0.6rem;
    }
    @media (max-width: 424px) {
      margin: 0;
      padding: 0;
      font-size: 0.5rem;
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
      font-size: 64px;
      text-decoration: none;
      transition: all 0.3s ease;
      @media (max-width: 1038px) {
        font-size: 3rem;
      }
      @media (max-width: 819px) {
        font-size: 2.6rem;
      }
      @media (max-width: 540px) {
        font-size: 2.4rem;
      }
      @media (max-width: 424px) {
        font-size: 2rem;
        margin: 0;
        padding: 0;
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
`;

export const IoMdContacts = styled(IoMdContact)`
  width: 44px;
  height: 44px;
  @media (max-width: 760px) {
    width: 36px;
  }
`;

export const IoMdEyeOffs = styled(IoMdEyeOff)`
  width: 44px;
  height: 44px;
  @media (max-width: 760px) {
    width: 36px;
    height: 36px;
  }
  &.iconMobile {
    width: 44px;
    height: 44px;
  }
`;
export const IoIosSearchs = styled(IoIosSearch)`
  height: 36px;
  width: 36px;
  color: white;
  cursor: pointer;
`;
export const IoIosMenus = styled(IoIosMenu)`
  color: white;
  width: 40px;
  height: 40px;
  margin-top: 6px;
`;

export const IoIosCloses = styled(IoIosClose)`
  color: white;
  width: 44px;
  height: 44px;
  //margin-top: 6px;
`;

export const ContanerLink = styled.div`
  box-shadow: none;
  background-image: none;
  border-radius: 0;
  border: none !important;
  padding: 0 10px 0 0 !important;
  span {
    display: none;
    position: absolute;
  }
  &:hover span {
    display: flex;
    min-width: 200px;
    height: fit-content;
    left: 100%;
    flex-direction: column;
    text-align: left;
    border-radius: 30px;
    border: 1px solid #0d4475;
    //box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.1);
    background-color: white;
    padding: 0 24px;
    margin: 0 auto;
    top: 0;
    a {
      color: #0d4475;
      text-decoration: none;
    }
  }
`;
