import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DivServices = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 6% auto;
  justify-content: center;
`;

export const ButtonLink = styled(NavLink)`
  width: 100%;
  text-align: left;
  text-decoration: none;
  display: flex;
  justify-content: start;
  align-items: center;
  cursor: pointer;
  z-index: 2;
  margin: 0;
  &.active {
    color: #a69b14;
  }
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
  a {
    color: #0d4475;
    text-decoration: none;
  }
`;

export const NavLinkService = styled(NavLink)`
  display: flex;
  flex: 0 0 30%;
  max-width: 20%;
  padding: 0.8rem;
  height: 230px;
  border-radius: 30px;
  margin: 0.8rem;
  flex-direction: column;
  position: relative;
  text-align: center;
  align-items: center;
  width: 100%;
  background: #fff;
  box-shadow: 0 6px 30px rgb(0 0 0 / 10%);
  border: white;
  cursor: pointer;
  color: #314d5c;
  text-decoration: none;
  justify-content: center;
  text-decoration-color: transparent;
  transition: 0.7s;
  &:hover {
    text-decoration: underline;
    text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: translateY(-1rem);
  }

  @media (max-width: 800px) {
    margin: 2rem;
    flex: 0 0 30%;
    max-width: 30%;
  }
  @media (max-width: 600px) {
    margin: 1rem;
    flex: 0 0 50%;
    max-width: 50%;
  }
`;