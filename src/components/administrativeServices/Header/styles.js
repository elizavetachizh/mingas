import styled from 'styled-components';

export const BlockBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.2rem;
  padding: 10px;
  //background-color: #e8f3ff;
  border-color: #0e43af;
`;

export const Button = styled.button`
  text-decoration: none;
  border: none;
  background: none;
  text-align: center;
  //width: 90%;
  font-size: 18px;
  cursor: pointer;
  transition: 1s;
  &.background {
    //background-color: #0d4475;
    background-color: #1241b3;
    border-radius: 30px;
    color: white;
    padding: 12px;
  }
`;
export const ContainerBtnIcon = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  color: #1241b3;
  align-items: center;
  justify-content: space-between;
  &.active {
    background-color: #1241b3;
    color: white;
  }
`;
export const DivOpen = styled.div`
  display: none;
  transition: 0.7s all;

  p {
    text-align: left;
  }
  &.shake {
    display: flex;
    flex-direction: column;
    transition: 0.7s all;
  }

  button {
    background: none;
    border: none;
    font-size: 16px;
    text-align: left;
    margin: 1rem auto;
    cursor: pointer;
    transition: all 0.25s ease;
    &:active {
      color: red;
    }
    &:hover {
      color: #0d4475;
    }
  }
`;

export const Name = styled.div`
  padding: 2rem 1.5rem;
  color: #fff;
  border-radius: 20px;
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  background: linear-gradient(to bottom right, #1241b3, #2c5acf 90px, 110px, #1b3a91);
  @media(max-width: 500px) {
    font-size: 1.2rem;
    padding: 1.4rem 1rem;
  }
`;
