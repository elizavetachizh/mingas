import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const BtnLink = styled.button`
  display: flex;
  //flex: 0 0 30%;
  //max-width: 30%;
  padding: 1rem;
  //height: 270px;
  margin: 1rem;
  flex-direction: column;
  position: relative;
  text-align: center;
  align-items: center;
  width: 100%;
  //background: #fff;
  //box-shadow: 0 6px 30px rgb(0 0 0 / 10%);
  //border: white;
  cursor: pointer;
  color: #314d5c;
  text-decoration: none;
  justify-content: center;
  //text-decoration-color: transparent;
  //&:hover {
  //  text-decoration: underline;
  //  text-decoration-color: rgba(49, 77, 93, 0.6);
  //  transform: translateY(-1rem);
  //}

@media (max-width: 800px) {
 height: 300px;
}
  @media (max-width: 800px) {
    margin: 2rem;
    flex: 0 0 40%;
    max-width: 40%;
  }
  @media (max-width: 600px) {
    margin: 1rem;
    flex: 0 0 60%;
    max-width: 60%;
  }
`;

export const Calculater = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .2s ease-in-out;
  height: 50px;
  border: 1px solid #0d4475;
  color: white !important;
  background-color: #6ec1e4;
  &:hover {
    background-color: #0d4475;
  }
`