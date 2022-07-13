import styled from 'styled-components';

export const BlockBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.2rem auto;
  padding: 10px;
`;

export const Button = styled.button`
  font-weight: 400;
  font-style: normal;
  color: #000;
  text-decoration: none;
  border: none;
  background: none;
  text-align: center;
  width: 100%;
  font-size: 18px;
`;
export const ContainerBtnIcon = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
`;
export const DivOpen = styled.div`
  display: none;
  transition: 0.7s all;

  p {
    text-align: justify;
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
    &.active {
      color: red;
    }
  }
`;

export const Name = styled.div`
  padding: 2rem 1.5rem;
  letter-spacing: 0.15rem;
  font-weight: 400;
  font-style: normal;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1.35;
  text-transform: uppercase;
  background: #0d4475;
`;
