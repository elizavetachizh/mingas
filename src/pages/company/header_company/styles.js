import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderCompanyDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1440px;
  margin: 14% auto 0 auto;
  @media (max-width: 1320px) {
    margin-top: 16%;
  }
  @media (max-width: 990px) {
    margin-top: 18%;
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
  width: 96%;
  margin: 0 2%;
  font-size: 16px;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-around;
  @media (max-width: 900px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const HeaderCompanyBtn = styled(NavLink)`
  text-decoration: none;
  color: #0d4475;
  margin: 0 auto;
  &.active {
    color: #a69b14;
  }
`;
