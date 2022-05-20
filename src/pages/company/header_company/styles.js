import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderCompanyDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6% auto;
  @media (max-width: 1320px) {
    margin-top: 12%;
  }
  @media (max-width: 600px) {
    margin-top: 16%;
  }
  @media (max-width: 400px) {
    margin-top: 24%;
  }
  hr {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    @media (max-width: 600px) {
      width: 90%;
      margin: 0 16%;
    }
    @media (max-width: 400px) {
      width: 100%;
      margin: 0 26%;
    }
  }
`;

export const DivButton = styled.div`
  max-width: 1440px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 10px auto;
  @media (max-width: 900px) {
    font-size: 14px;
    text-align: center;
  }
`;

export const HistoryButton = styled(NavLink)`
  text-decoration: none;
  color: #0d4475;
  margin: 0 14px;

  &.active {
    color: #a69b14;
  }
`;

export const ManagementButton = HistoryButton;
export const StructureButton = HistoryButton;
export const CareerButton = HistoryButton;
export const DocumentsButton = HistoryButton;
export const UnionButton = HistoryButton;
