import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderCompanyDiv = styled.div`
  margin: 4% 2% 0;
  height: fit-content;
  width: 50%;
  display: flex;
  border-radius: 20px;
  border: 1px solid #1b3a91;
  flex-direction: column;
  @media (max-width: 820px) {
    display: none;
  }
`;


export const HeaderConcatsBtn = styled(NavLink)`
  text-decoration: none;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  //background: #e8f3ff;
  text-align: left;
  color: #0752e9;
  padding: 0.8rem;
  &:active {
    color: #a69b14;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
