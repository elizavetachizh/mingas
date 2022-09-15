import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const MenuWidth = {
  s: `
    width: 30%;
  
    `,
  //  blue: `
  //    background-color: #0d4475;
  //    `,
  //  border: `
  // a,
  //  p,
  //  select,
  //  img,
  //  button {
  //    color: #0d4475;
  // }
  //    border: 1px solid white;
  //    background-color: white;
  //    `,
};
export const HeaderCompanyDiv = styled.div`
  margin: 4% 2% 0;
  height: fit-content;
  width: 50%;
  display: flex;
  border-radius: 20px;
  border: 1px solid #1b3a91;
  flex-direction: column;
  ${({ width }) => MenuWidth[width]};
  @media (max-width: 820px) {
    display: none;
  }
`;

export const HeaderConcatsBtn = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  text-align: left;
  color: #0d4475;
  padding: 0.8rem;
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
