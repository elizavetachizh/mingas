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
  margin: 2% auto;
  flex-direction: column;
  @media (max-width: 640px) {
    text-align: center;
  }
`;

export const DivInputCheckbox = styled.div`
  display: flex;
  margin: 1.5rem 0;
  justify-content: center;
`;

export const Label = styled.label`
  color: #2d4c6b;
  font-size: 18px;
  margin-bottom: 4px;
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
  height: fit-content;
  label {
    width: 100%;
    max-width: 220px;
    height: 44px;
    background-image: linear-gradient(
      -55deg,
      rgb(1, 95, 156) 0%,
      rgb(16, 69, 141) 0%,
      rgb(15, 89, 141) 19%,
      rgb(15, 78, 140) 69%,
      rgb(14, 78, 129) 79%,
      rgb(13, 68, 117) 100%
    );
    color: #fff;
    font-size: 0.8rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 auto;
  }
`;

export const InputFile = styled.input`
  width: 100%;
  height: 100%;
  opacity: 0;
  position: absolute;
`;

export const Button = styled.button`
  border: 1px solid #0d4475;
  color: #fff; /* Цвет текста */
  background-image: linear-gradient(
    -55deg,
    rgb(1, 95, 156) 0%,
    rgb(16, 69, 141) 0%,
    rgb(15, 89, 141) 19%,
    rgb(15, 78, 140) 69%,
    rgb(14, 78, 129) 79%,
    rgb(13, 68, 117) 100%
  );
  border-radius: 20px;
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
