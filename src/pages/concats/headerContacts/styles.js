import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderCompanyDiv = styled.div`
  background: #e8f3ff;
  max-width: 29%;
  margin: 0 2%;
  height: 300px;
  @media(max-width: 800px) {
    height: auto;
  }
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
`;

export const ConcatsButton = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #314d5c;
  padding: 1rem;
  &.active {
    color: #a69b14;
  }
  @media(max-width: 400px) {
    font-size: 14px;
  }
`;

export const WorkScheduleButton = ConcatsButton;

export const PhoneServicesButton = ConcatsButton;

export const RequisitesButton = ConcatsButton;
