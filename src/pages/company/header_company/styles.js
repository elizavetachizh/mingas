import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderCompanyDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  flex-wrap: wrap;
  margin: 10% auto 0 auto;
  @media (max-width: 1392px) {
    width: 60%;
  }
  @media (max-width: 1340px) {
    margin-top: 12%;
    width: 70%;
  }
  @media (max-width: 1174px) {
    margin-top: 14%;
    width: 80%;
  }
  @media (max-width: 1028px) {
    margin-top: 16%;
    width: 90%;
  }
  @media (max-width: 913px) {
    margin-top: 14%;
    width: 100%;
  }
  @media (max-width: 610px) {
    margin-top: 20%;
  }
  @media (max-width: 510px) {
    margin-top: 24%;
  }
  hr {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    //@media (max-width: 600px) {
    //  width: 90%;
    //  margin: 0 16%;
    //}
    //@media (max-width: 400px) {
    //  width: 100%;
    //  margin: 0 26%;
    //}
  }
`;

export const DivButton = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    font-size: 14px;
    text-align: center;
  }
  &.menu {
    flex-direction: column;
    a {
      color: white;
    }
  }
`;

export const HeaderCompanyBtn = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: #0d4475;
  margin: 2% auto;
  padding: 0 0.5%;
  @media (max-width: 1340px) {
    padding: 0 0.8%;
    margin: 2%;
  }
  &.active {
    color: #a69b14;
  }
`;

export const HeaderCompanyContainer = styled.div`
  @media (max-width: 650px) {
    margin: 20% auto 0;
  }
  @media (max-width: 450px) {
    margin: 30% auto 0;
  }
`;
