import styled from 'styled-components';
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 5;
  background-color: #0c76e8;
  //width: auto;
  height: fit-content;
  a {
    text-decoration: none;
    text-align: justify;
  }
`;

export const Form = styled.form`
  width: 250px;
  max-width: 100%;
  position: relative;
  @media (max-width: 1600px) {
    width: 200px;
  }
  @media (max-width: 1000px) {
    width: 130px;
  }
  @media (max-width: 800px) {
    width: auto;
  }
`;

export const Button = styled.button`
  top: 4px;
  right: 0.75rem;
  background: rgba(0, 0, 0, 0) 50% 50% no-repeat;
  border-radius: 4px;
  width: 42px;
  height: 28px;
  border: 0;
  transition: all 0.3s;
`;
export const ContainerFormSearch = styled.div`
  z-index: 3;
  &:before {
    content: '';
    position: absolute;
    //left: -1500px;
    //right: -1500px;
    top: 0;
    height: 154px;
    background: rgba(255, 255, 255, 1);
  }
`;
export const FormSearch = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  z-index: 5;
  width: 340px;
  justify-content: space-around;
  position: relative;
  input {
    border: none;
    font-weight: 400;
    font-size: 1.3rem;
    line-height: 80px;
    padding: 0 16px 2px;
    outline: none;
    margin: 0;
    background: none;
    width: 100%;
  }
`;
