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
  text-align: left;
  width: 90%;
  font-size: 18px;
  cursor: pointer;
  transition: 1s;
  outline: none;

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
  text-align: left;
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
    background-color: transparent;
    border: none;
    font-size: 16px;
    text-align: left;
    margin: 1rem 0;
    cursor: pointer;
    transition: all 0.25s ease;
    outline: none;
    -webkit-tap-highlight-color: transparent;
    &.shake {
      color: #0d4475;
      font-weight: bold;
      text-decoration-line: underline;
    }
  }
`;

export const Name = styled.div`
  padding: 2rem 1.5rem;
  color: #fff;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  text-align: center;
  font-size: 1.5rem;
  text-transform: uppercase;
  background-image: linear-gradient(
    -55deg,
    rgb(1, 95, 156) 0%,
    rgb(16, 69, 141) 0%,
    rgb(15, 89, 141) 19%,
    rgb(15, 78, 140) 60%,
    rgb(14, 78, 129) 79%,
    rgb(13, 68, 117) 100%
  );
  @media (max-width: 500px) {
    font-size: 1.2rem;
    padding: 1.4rem 1rem;
  }
  a {
    color: white;
  }
  &:hover {
    transform: scale(1.1);
    transition: transform 0.8s;
  }
`;
