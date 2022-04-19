import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderCompanyDiv = styled.div`
  background: #e8f3ff;
  max-width: 29%;
  margin: 0 2%;
`;

export const DivButton = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ConcatsButton = styled(NavLink)`
  text-decoration: none;
  font-family: 'Bilbo';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  color: #314d5c;
  padding: 1rem;
`;

export const WorkScheduleButton = ConcatsButton;

export const PhoneServicesButton = ConcatsButton;

export const RequisitesButton = ConcatsButton;
