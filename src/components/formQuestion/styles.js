import styled from 'styled-components';

export const Form = styled.div``;

export const DivInputName = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;
export const DivInputEmail = DivInputName;
export const DivInputPhone = DivInputName;
export const DivInputAdress = DivInputName;
export const DivInputText = DivInputName;

export const TwoColumnTextAndForm = styled.div`
  margin: 6% 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;

export const TwoColumn = styled.div`
  width: 50%;
`;

export const DivInputCheckbox = styled.div`
  display: flex;
  margin: 1.5rem 0;
`;

export const Label = styled.label`
  color: #2d4c6b;
  opacity: 0.65;
  margin-left: 1rem;
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
