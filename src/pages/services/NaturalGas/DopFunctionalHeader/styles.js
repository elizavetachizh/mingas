import styled from 'styled-components';

export const BtnLink = styled.button`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  flex-direction: column;
  position: relative;
  text-align: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  color: #314d5c;
  text-decoration: none;
  justify-content: center;

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
  transition: all 0.2s ease-in-out;
  height: 50px;
  border: 1px solid #0d4475;
  color: white !important;
  background-color: #6ec1e4;
  &:hover {
    background-color: #0d4475;
  }
`;
