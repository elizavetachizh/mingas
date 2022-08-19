import styled from 'styled-components';

export const Form = styled.form`
  width: 90%;
  max-width: 980px;
  margin: 0 auto;
  z-index: 3;
`;

export const DivInput = styled.div`
  display: flex;
  width: 90%;
  margin: 0;
  flex-direction: column;
  @media(max-width: 640px) {
    text-align: center;
  }
`;

export const TwoColumnTextAndForm = styled.div`
  display: flex;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  @media (max-width: 640px) {
    width: 640px;
    margin: 6% auto;
  }
  @media (max-width: 550px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-right: 4%;
  }
`;

export const OneColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  h2 {
    font-weight: bold;
    text-transform: uppercase;
    color: #264c6f;
  }
  h3 {
    color: #2d9cdb;
    font-size: 1.25rem;
    text-transform: uppercase;
  }
  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 640px) {
    width: 80%;
    text-align: center;
    margin: 0 auto;
  }
`;

export const TwoColumn = styled.div`
  width: 100%;
  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 550px) {
    margin: 0 auto;
  }
`;

export const DivInputCheckbox = styled.div`
  display: flex;
  margin: 1.5rem 0;
  justify-content: center;
`;

export const Label = styled.label`
  color: #2d4c6b;
  opacity: 0.65;
  font-size: 20px;
  span {
    color: red;
  }
`;

export const Span = styled.span`
  color: red;
`;

export const InputCheckbox = styled.input``;

export const DivInputFile = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  margin: 1.5rem 0 0;
  height: 50px;
  display: flex;
  flex-direction: column;
  div{
    display: flex;
    flex-direction: column;
  }
  span {
    margin-top: 30px;
  }
`;

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
`;

export const Button = styled.button`
  //color: #0d4475;
  //background: none;
  border:1px solid #0d4475;
  color: #fff; /* Цвет текста */
  background: linear-gradient(to top left, #1241b3 10px, #2c5acf 50px, 70px, #1b3a91);
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  width: 240px;
  text-align: center;
  
  text-decoration: none;
  //border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  margin: 4% auto;
  cursor: pointer;
  transition: 0.8s linear;
`;

export const Background = styled.img`
  position: absolute;
  display: flex;
  right: 0;
  width: 50%;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;
