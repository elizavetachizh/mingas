import styled from 'styled-components';

export const Form = styled.form``;

export const DivInputName = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;
export const DivInputEmail = DivInputName;
export const DivInputAdress = DivInputName;
export const DivInputPhone = DivInputName;
export const DivInputText = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  input {
    height: 100px;
  }
`;

export const TwoColumnTextAndForm = styled.div`
  margin: 6% 10%;
  display: flex;
  justify-content: space-between;
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
  width: 50%;
  h2 {
    font-weight: bold;
    text-transform: uppercase;
    color: #264c6f;
  }
  h3 {
    color: #2d9cdb;
    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1;
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
`;

export const Span = styled.span`
  color: red;
`;

export const Input = styled.input`
  padding-right: 3rem;
  background-size: 22px;
  background-color: #eaeff1;
  border-radius: 4px;
  border: 0;
  padding-left: 1rem;
  width: 100%;
  height: 40px;
`;

export const InputCheckbox = styled.input``;

export const InputTextBox = styled.input`
  height: 80px;
  padding-right: 3rem;
  background-size: 22px;
  background-color: #eaeff1;
  border-radius: 4px;
  border: 0;
  padding-left: 1rem;
  width: 100%;
`;

export const DivInputFile = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  margin: 1.5rem 0;
  height: 36px;
  span {
    position: relative;
    background: #f6f6f6;
    border: 1px solid #c5c5c5;
    border-radius: 0;
    box-shadow: 1px 1px 1px #c5c5c5;
    padding: 10px 21px;
    font-size: 15px;
    color: #6c757d;
  }
`;

export const InputFile = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 180px;
  height: 100%;
  opacity: 0;
`;

export const Button = styled.button`
  color: white;
  background-color: #0D4475;
  font-size: 16px;
  font-weight: 500;
  width: 172px;
  text-align: center;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  left: 1135px;
  margin: 4% auto;
  cursor: pointer;
`;
