import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const DivNews = styled.a`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  align-items: start;
  border-radius: 20px;
  justify-content: center;
  margin: 0 10px;
  background-repeat: no-repeat;
  width: 100%;
  background-position: bottom;
  color: #ffffff;
  font-size: 1rem;
  background-size: contain;
  font-weight: bold;

  img {
    width: 100%;
    border-radius: 20px;
    z-index: -1;
    position: relative;
    //@media (max-width: 640px) {
    //  width: 70%;
    //}
  }
  &:hover {
    //text-decoration: underline;
    //text-decoration-color: rgba(49, 77, 93, 0.6);
    transform: scale(1.1);
    background-repeat: no-repeat;
    width: 100%;
    background-position: bottom;
    background-size: contain;
  }
  @media (max-width: 1110px) {
    font-size: 0.8rem;
  }
  @media (max-width: 950px) {
    width: 60%;
    margin: 4% auto;
    font-size: 1rem;
  }
`;

export const DateLink = styled.p`
  position: absolute;
  padding: 0 6px 0;
  text-align: start;
  margin: 7.6% auto 0.2%;
  @media (max-width: 1110px) {
    margin: 7% auto 0.2%;
  }
  @media (max-width: 950px) {
    margin: 30% auto 0.2%;
  }
  @media (max-width: 530px) {
    margin: 35% auto 0.2%;
  }
  @media (max-width: 430px) {
    margin: 46% auto 0.2%;
  }
`;

export const DescLink = styled.p`
  text-align: start;
  position: absolute;
  padding: 0 6px 0;
  margin: 11% auto 1%;
  @media (max-width: 950px) {
    margin: 25% auto 0.2%;
  }
  @media (max-width: 530px) {
    margin: 28% auto 0.2%;
  }
  @media (max-width: 430px) {
    margin: 35% auto 0.2%;
  }
`;
