import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderCompanyDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6% auto;
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
