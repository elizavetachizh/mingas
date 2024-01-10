import styled from 'styled-components';
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 5;
  background: rgba(255, 255, 255, 1);
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  color: #0d4475 !important;
  //width: auto;
  border-radius: 20px;
  height: fit-content;
  padding: 2%;
  margin: 0 6%;
  a {
    text-decoration: none;
    text-align: justify;
    color: #0d4475;
  }
`;

export const ContainerFormSearch = styled.div`
  z-index: 3;
  position: absolute;
  background-color: white;
  width: 100%;
  padding: 10px 0;
  left: 0;
`;
export const FormSearch = styled.form`
  display: flex;
  flex-direction: row;
  //position: absolute;
  //background-color: white;
  align-items: center;
  z-index: 5;
  width: 31%;
  margin: 0 auto;
  justify-content: space-around;
  position: relative;
  @media (max-width: 1100px) {
    width: 40%;
  }
  @media (max-width: 834px) {
    width: 50%;
  }
  @media (max-width: 666px) {
    width: 55%;
  }
  @media (max-width: 639px) {
    width: 94%;
  }
  @media (max-width: 359px) {
    width: 100%;
  }
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
